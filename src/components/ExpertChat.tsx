import { MessageCircle } from 'lucide-react';

export function ExpertChat() {
  return (
    <button className="fixed bottom-8 right-8 z-50 bg-[#4d6a36] text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 hover:scale-105 transition-transform active:scale-95">
      <MessageCircle className="w-6 h-6" />
      <span className="font-bold text-sm">Expert Chat</span>
    </button>
  );
}
