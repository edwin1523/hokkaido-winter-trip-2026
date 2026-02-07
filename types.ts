
export interface ItineraryDetail {
  note?: string;
  address?: string;
  bookingRef?: string;
  link?: {
    text: string;
    url: string;
  };
}

export interface ItineraryItem {
  id: string;
  icon: string;
  time: string;
  activity: string;
  details: ItineraryDetail;
}

export interface DaySchedule {
  date: string;
  dayOfWeek: string;
  items: ItineraryItem[];
}
