
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface CalendarViewProps {
  currentMonth: Date;
  prevMonth: () => void;
  nextMonth: () => void;
  scheduledPosts: any[];
}

const CalendarView = ({ currentMonth, prevMonth, nextMonth, scheduledPosts }: CalendarViewProps) => {
  // Simple calendar date generator
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };
  
  const generateCalendarDates = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push({ day: '', date: null });
    }
    
    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
      const events = scheduledPosts.filter(post => post.date === dateStr);
      days.push({ day: i, date: dateStr, events });
    }
    
    return days;
  };
  
  const calendarDays = generateCalendarDates();
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <Card className="p-6" raised intensity="light">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold flex items-center">
          <Calendar size={20} className="mr-2" />
          Editorial Calendar
        </h3>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" className="bg-off-white shadow-neumorph-sm" onClick={prevMonth}>
            <ChevronLeft size={16} />
          </Button>
          <h4 className="text-lg font-medium">
            {currentMonth.toLocaleString('default', { month: 'long' })} {currentMonth.getFullYear()}
          </h4>
          <Button variant="outline" className="bg-off-white shadow-neumorph-sm" onClick={nextMonth}>
            <ChevronRight size={16} />
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {weekdays.map(day => (
          <div key={day} className="text-center font-medium py-2">
            {day}
          </div>
        ))}
        
        {calendarDays.map((day, i) => (
          <div 
            key={i} 
            className={`min-h-24 p-2 border border-stone-gray/20 rounded-md ${
              day.events && day.events.length > 0 
                ? 'bg-champagne/10' 
                : day.date ? 'bg-off-white' : 'bg-stone-gray/5'
            }`}
          >
            {day.day && (
              <>
                <div className="font-medium">{day.day}</div>
                <div className="mt-1 space-y-1">
                  {day.events && day.events.map(event => (
                    <TooltipProvider key={event.id}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div 
                            className="text-xs p-1 bg-champagne/20 rounded truncate cursor-pointer hover:bg-champagne/40 transition-colors"
                          >
                            {event.time} - {event.title}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <div className="p-1">
                            <div className="font-medium">{event.title}</div>
                            <div className="text-xs">By {event.author}</div>
                            <div className="text-xs">Status: {event.status}</div>
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
};

export default CalendarView;
