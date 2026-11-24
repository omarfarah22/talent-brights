import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { emptyData, STORAGE_KEY, type DemoData } from '@/lib/talentbridge';
const Context = createContext<{ data: DemoData; save: (next: DemoData) => void; reset: () => void; storageError: string }>({ data: emptyData, save: () => {}, reset: () => {}, storageError: '' });
export function DemoProvider({ children }: { children: ReactNode }) {
 const [data, setData] = useState<DemoData>(emptyData); const [storageError, setError] = useState('');
 useEffect(() => { try { const raw = localStorage.getItem(STORAGE_KEY); if (raw) { const value = JSON.parse(raw) as DemoData; if (Array.isArray(value.applications)) setData(value); } } catch { setError('Saved demo progress could not be read. You can reset it from your dashboard.'); } }, []);
 const save = (next: DemoData) => { setData(next); try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch { setError('Your browser could not save progress. It will remain available until you leave this page.'); } };
 const reset = () => { setData({ applications: [] }); try { localStorage.removeItem(STORAGE_KEY); setError(''); } catch { setError('Your browser could not clear saved progress.'); } };
 return <Context.Provider value={{ data, save, reset, storageError }}>{children}</Context.Provider>;
}
export const useDemo = () => useContext(Context);
