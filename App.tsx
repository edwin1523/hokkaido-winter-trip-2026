
import React, { useState, useEffect } from 'react';
import { TRIP_DATA } from './constants';
import { ItineraryItem } from './types';

const Header: React.FC = () => (
  <header className="hero-bg relative overflow-hidden">
    <div className="z-10 pb-24 pt-10 px-4 text-center">
      <h1 className="font-tourney text-3xl md:text-5xl lg:text-6xl font-bold text-[#0a4bfc] mb-2 tracking-widest drop-shadow-[0_2px_10px_rgba(255,255,255,1)]">
        HOKKAIDO WINTER TRIP
      </h1>
      <p className="font-sans text-lg md:text-2xl font-bold text-[#0a4bfc] opacity-90 tracking-wider drop-shadow-[0_1px_4px_rgba(255,255,255,1)]">
        2026.02.14 - 2026.02.23
      </p>
    </div>
    {/* 裝飾性的小雪花圖標 */}
    <div className="absolute top-4 right-4 text-blue-100/50 text-4xl select-none">❄️</div>
    <div className="absolute top-20 left-6 text-blue-100/30 text-2xl select-none rotate-12">❄️</div>
  </header>
);

const DayNav: React.FC = () => {
  const [activeDay, setActiveDay] = useState(0);

  const scrollToDay = (index: number) => {
    const element = document.getElementById(`day-${index + 1}`);
    if (element) {
      const headerOffset = 130;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveDay(index);
    }
  };

  // 監聽滾動來自動更新 activeDay
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      TRIP_DATA.forEach((_, index) => {
        const element = document.getElementById(`day-${index + 1}`);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveDay(index);
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl shadow-sm border-b border-slate-100">
      <nav className="day-nav-scroll flex overflow-x-auto py-3 px-4 gap-3 scroll-smooth">
        {TRIP_DATA.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToDay(index)}
            className={`flex-shrink-0 px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
              activeDay === index 
                ? 'bg-[#0a4bfc] text-white shadow-[0_4px_12px_rgba(10,75,252,0.3)] scale-105' 
                : 'bg-slate-50 text-slate-400 hover:bg-slate-100'
            }`}
          >
            Day {index + 1}
          </button>
        ))}
      </nav>
    </div>
  );
};

const ItineraryCard: React.FC<{ item: ItineraryItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 mb-3 overflow-hidden transition-all duration-300 hover:shadow-md hover:border-blue-100 group animate-fade-in">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start gap-4 p-5 text-left focus:outline-none"
      >
        <span className="text-3xl bg-slate-50 w-14 h-14 flex items-center justify-center rounded-xl group-hover:scale-110 transition-transform duration-300" role="img">
          {item.icon}
        </span>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[#3498db] font-bold text-[10px] uppercase tracking-widest bg-blue-50 px-2 py-0.5 rounded">
              {item.time}
            </span>
          </div>
          <span className="text-slate-800 font-bold text-[17px] leading-tight group-hover:text-[#0a4bfc] transition-colors">
            {item.activity}
          </span>
          {!isOpen && item.details.note && (
            <p className="text-slate-400 text-xs mt-1.5 line-clamp-1 italic">
              {item.details.note}
            </p>
          )}
        </div>
        <div className={`mt-4 w-6 h-6 flex items-center justify-center rounded-full bg-slate-50 text-slate-300 transition-all duration-300 ${isOpen ? 'rotate-180 bg-blue-50 text-blue-400' : ''}`}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </div>
      </button>
      
      <div 
        className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-5 pb-6 ml-14 text-sm text-slate-600 space-y-4">
          {item.details.note && (
            <div className="bg-blue-50/50 p-4 rounded-xl border-l-4 border-blue-200">
              <span className="font-bold text-blue-400 block text-[10px] uppercase mb-1 tracking-wider">備註 Note</span>
              <p className="leading-relaxed text-slate-700">{item.details.note}</p>
            </div>
          )}
          
          <div className="grid grid-cols-1 gap-4">
            {item.details.address && (
              <div className="flex items-start gap-2">
                <span className="text-lg">📍</span>
                <div>
                  <span className="font-bold text-slate-400 block text-[10px] uppercase tracking-wider">地點 Location</span>
                  <p className="text-slate-700 font-medium">{item.details.address}</p>
                </div>
              </div>
            )}
            
            {item.details.link && (
              <a 
                href={item.details.link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 p-3 bg-slate-50 rounded-xl hover:bg-[#0a4bfc] hover:text-white transition-all group/btn"
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">🗺️</span>
                  <span className="font-bold text-xs uppercase">{item.details.link.text}</span>
                </div>
                <svg className="group-hover/btn:translate-x-1 transition-transform" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const DailyGroup: React.FC<{ day: typeof TRIP_DATA[0]; index: number }> = ({ day, index }) => (
  <div id={`day-${index + 1}`} className="mb-16 scroll-mt-36">
    <div className="flex items-center justify-between mb-6 px-2">
      <div className="flex items-end gap-3">
        <span className="font-serif-jp text-7xl font-bold text-blue-50 leading-none select-none">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="pb-1">
          <h2 className="text-2xl font-black text-slate-800 tracking-tight leading-none mb-1">
            DAY {index + 1}
          </h2>
          <span className="text-[#3498db] font-bold text-sm tracking-wide bg-blue-50 px-2 py-0.5 rounded">
            {day.date} • {day.dayOfWeek}
          </span>
        </div>
      </div>
      <div className="h-px flex-1 bg-gradient-to-r from-blue-100 to-transparent ml-4 hidden sm:block"></div>
    </div>
    <div className="space-y-3">
      {day.items.map((item) => (
        <ItineraryCard key={item.id} item={item} />
      ))}
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] pb-32">
      <Header />
      <DayNav />
      
      <main className="max-w-md mx-auto px-5 py-12">
        {TRIP_DATA.map((day, index) => (
          <DailyGroup key={index} day={day} index={index} />
        ))}
        
        <footer className="mt-20 text-center space-y-6">
          <div className="flex justify-center gap-2">
            <span className="animate-bounce">❄️</span>
            <span className="animate-bounce delay-100">⛄</span>
            <span className="animate-bounce delay-200">❄️</span>
          </div>
          <div className="space-y-1">
            <p className="text-[#0a4bfc] text-xs font-black tracking-[0.2em] uppercase">
              Enjoy the Wonderful Trip
            </p>
            <p className="text-slate-300 text-[10px] font-medium tracking-widest">
              &copy; 2026 OUR HOKKAIDO MEMORY.
            </p>
          </div>
        </footer>
      </main>

      {/* 底部功能列 - 懸浮磨砂設計 */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-sm z-50">
        <div className="bg-white/80 backdrop-blur-2xl border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.12)] rounded-3xl p-2 flex gap-2">
          <a 
            href="https://tenki.jp/forecast/1/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-[#0a4bfc] text-white font-bold text-sm transition-transform active:scale-95 shadow-lg shadow-blue-200"
          >
            <span>🌤️</span>
            <span>天氣預報</span>
          </a>
          <a 
            href="https://share.google/a3K4drgNyIvMJFlxo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-white text-slate-700 font-bold text-sm border border-slate-100 transition-transform active:scale-95"
          >
            <span>💴</span>
            <span>日圓匯率</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
