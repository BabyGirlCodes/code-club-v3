import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  HomeIcon,
  DocumentDuplicateIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';

const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UsersIcon },
];

export default function SideNav() {
  const pathname = usePathname();

  return (
    <aside className="w-60 p-4 border-r">
      <div className="mb-8">
        {/* Your logo or brand here */}
        <Link href="/dashboard" className="text-2xl font-bold">
          Dashboard
        </Link>
      </div>
      <nav>
        {links.map((link) => {
          const LinkIcon = link.icon;
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center p-2 rounded-md mb-2 ${
                isActive
                  ? 'bg-gray-200 text-gray-900'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <LinkIcon className="h-5 w-5 mr-2" />
              {link.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  )};