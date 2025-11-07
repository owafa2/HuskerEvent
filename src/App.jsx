import React, { useMemo, useState } from 'react';
import Header from './components/Header.jsx';
import Calendar from './components/Calendar.jsx';
import EventCard from './components/EventCard.jsx';
import MapView from './components/MapView.jsx';

export default function App() {
  const apiKey = "AIzaSyAVqgZ7cFS1H6VR2ffVH1We8Z9KYkB3-D0";

  const events = [
    { id: 'u1', title: "The Union", location: "The Union", date: "10/15/2025", time: "18:00", coords: { lat: 40.8213, lng: -96.7031 } },
    { id: 'm1', title: "Memorial Stadium", location: "Memorial Stadium", date: "10/20/2025", time: "19:00", coords: { lat: 40.8176, lng: -96.6990 } },
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const norm = (s) => (s || '').toLowerCase().trim();

  const filteredEvents = useMemo(() => {
    const q = norm(searchQuery);
    if (!q) return events;
    return events.filter(ev => {
      const hay = norm([ev.title, ev.location].join(' '));
      return hay.includes(q);
    });
  }, [events, searchQuery]);

  return (
    <div className="flex flex-col h-screen bg-gray-800 text-gray-200 font-sans">
      <Header query={searchQuery} onQueryChange={setSearchQuery} />
      <main className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-6 p-6 overflow-hidden">
        <div className="md:col-span-5 flex flex-col gap-6 overflow-y-auto pr-2 custom-scrollbar">
          <Calendar events={filteredEvents.map(e => ({ id: e.id, title: e.title, date: e.date }))} />
          {filteredEvents.map(e => (
            <EventCard key={e.id} title={e.title} date={e.date} time={e.time} location={e.location} />
          ))}
          {!filteredEvents.length && (
            <div className="text-sm text-gray-400">No events found.</div>
          )}
        </div>

        <div className="md:col-span-7 h-full w-full rounded-lg overflow-hidden shadow-lg">
          <MapView apiKey={apiKey} events={filteredEvents} />
        </div>
      </main>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #2d3748;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #4a5568;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #718096;
        }
      `}</style>
    </div>
  );
}

