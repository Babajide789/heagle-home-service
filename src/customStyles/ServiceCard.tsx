import { LucideIcon } from 'lucide-react';
import Link from "next/link";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  linkTo?: string;
}

export function ServiceCard({ icon: Icon, title, description, linkTo }: ServiceCardProps) {
  const content = (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
      <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
        <Icon className="size-6 text-blue-600" />
      </div>
      <h3 className="text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );

  if (linkTo) {
    return <Link href={linkTo}>{content}</Link>;
  }

  return content;
}
