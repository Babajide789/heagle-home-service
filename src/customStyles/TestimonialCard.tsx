import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  location: string;
  text: string;
  rating?: number;
}

export function TestimonialCard({ name, location, text, rating = 5 }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="size-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-gray-700 mb-4 italic">&quot;{text}&quot;</p>
      <div>
        <div className="text-gray-900">{name}</div>
        <div className="text-sm text-gray-500">{location}</div>
      </div>
    </div>
  );
}
