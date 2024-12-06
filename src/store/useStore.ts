import { create } from 'zustand';

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  status: 'new' | 'contacted' | 'qualified' | 'proposal' | 'negotiation' | 'closed';
  createdAt: Date;
}

interface Activity {
  id: string;
  leadId: string;
  type: 'note' | 'email' | 'call' | 'meeting';
  description: string;
  createdAt: Date;
}

interface StoreState {
  leads: Lead[];
  activities: Activity[];
  addLead: (lead: Omit<Lead, 'id' | 'createdAt'>) => void;
  addActivity: (activity: Omit<Activity, 'id' | 'createdAt'>) => void;
}

export const useStore = create<StoreState>((set) => ({
  leads: [],
  activities: [],
  addLead: (lead) =>
    set((state) => ({
      leads: [
        ...state.leads,
        {
          ...lead,
          id: crypto.randomUUID(),
          createdAt: new Date(),
        },
      ],
    })),
  addActivity: (activity) =>
    set((state) => ({
      activities: [
        ...state.activities,
        {
          ...activity,
          id: crypto.randomUUID(),
          createdAt: new Date(),
        },
      ],
    })),
}));
