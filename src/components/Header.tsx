import { Container, Button, Menu, UnstyledButton } from '@mantine/core';
import { IconSearch, IconShoppingCart, IconWorld, IconMenu2, IconX, IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [bookOpen, setBookOpen] = useState(false);
  const [moneyOpen, setMoneyOpen] = useState(false);
  const [communityOpen, setCommunityOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <Container size="xl" className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-7 h-16">
          {/* Mobile: Burger */}
          <button
            aria-label="Open menu"
            className="lg:hidden p-2 -ml-2 rounded hover:bg-gray-100"
            onClick={() => setMobileOpen(true)}
          >
            <IconMenu2 size={22} />
          </button>
          {/* Left: Logo */}
          <a href="/" className="flex items-center gap-3">
            <img
              src="/logo-udemy.svg"
              alt="Logo"
              className="h-8 w-auto"
            />
          </a>

          {/* Explore */}
          <a href="#" className="hidden lg:inline-block text-sm text-gray-700 hover:text-black">Hunting</a>

          {/* Center: Search */}
          <div className="flex-1 hidden md:flex justify-center">
            <div className="w-full max-w-[820px] relative">
              <IconSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input
                type="text"
                placeholder="Search for anything"
                className="w-full h-12 rounded-full border border-gray-300 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10"
              />
            </div>
          </div>

          {/* Right: Optional dropdown menus */}
          <div className="hidden xl:flex items-center gap-5">
            <Menu shadow="md" width={200} withinPortal opened={bookOpen} onOpen={() => setBookOpen(true)} onClose={() => setBookOpen(false)}>
              <Menu.Target>
                <UnstyledButton className="px-2 py-1 text-sm text-gray-700 hover:text-black rounded hover:bg-gray-50 flex items-center gap-1">
                  <span>BookShell</span>
                  {bookOpen ? <IconChevronUp size={16} /> : <IconChevronDown size={16} />}
                </UnstyledButton>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item>Course Name</Menu.Item>
                <Menu.Item>Techno Log</Menu.Item>
                <Menu.Divider />
                <Menu.Item>Projects</Menu.Item>
                <Menu.Item>Online Resourse  </Menu.Item>
              </Menu.Dropdown>
            </Menu>
            <Menu shadow="md" width={200} withinPortal opened={moneyOpen} onOpen={() => setMoneyOpen(true)} onClose={() => setMoneyOpen(false)}>
              <Menu.Target>
                <UnstyledButton className="px-2 py-1 text-sm text-gray-700 hover:text-black rounded hover:bg-gray-50 flex items-center gap-1">
                  <span>MoneyMap</span>
                  {moneyOpen ? <IconChevronUp size={16} /> : <IconChevronDown size={16} />}
                </UnstyledButton>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item>Course Price</Menu.Item>
                <Menu.Item>Analytic Price</Menu.Item>
                <Menu.Item>DS Price</Menu.Item>
                <Menu.Item>Cyber Price</Menu.Item>
                <Menu.Item>Web Price</Menu.Item>
                <Menu.Item>Cloud Price</Menu.Item>
              </Menu.Dropdown>
            </Menu>
            <Menu shadow="md" width={200} withinPortal opened={communityOpen} onOpen={() => setCommunityOpen(true)} onClose={() => setCommunityOpen(false)}>
              <Menu.Target>
                <UnstyledButton className="px-2 py-1 text-sm text-gray-700 hover:text-black rounded hover:bg-gray-50 flex items-center gap-1">
                  <span>Community</span>
                  {communityOpen ? <IconChevronUp size={16} /> : <IconChevronDown size={16} />}
                </UnstyledButton>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item>Events</Menu.Item>
                <Menu.Item>Learning Stories</Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </div>

          {/* Right: Icons + Auth */}
          <div className="flex items-center gap-2 ml-auto">
            <button aria-label="Cart" className="p-2 rounded hover:bg-gray-100">
              <IconShoppingCart size={22} />
            </button>
            <Button variant="default" size="compact-sm" className="hidden sm:inline-flex rounded-md border-gray-300">
              Log in
            </Button>
            <Button size="compact-sm" className="hidden sm:inline-flex bg-purple-600 hover:bg-purple-700 text-white rounded-md">
              Sign up
            </Button>
            <Menu shadow="md" width={200} withinPortal>
              <Menu.Target>
                <button aria-label="Language" className="p-2 rounded hover:bg-gray-100">
                  <IconWorld size={22} />
                </button>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Label>Select language</Menu.Label>
                <Menu.Item>English</Menu.Item>
                <Menu.Item>हिन्दी (Hindi)</Menu.Item>
                <Menu.Item>Español (Spanish)</Menu.Item>
                <Menu.Item>Français (French)</Menu.Item>
                <Menu.Item>Deutsch (German)</Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </div>
        </div>
      </Container>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-0 left-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl border-r border-gray-200">
            <div className="flex items-center justify-between px-4 h-16 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <img
                  src="/new_one_linked_kun.png"
                  alt="Logo"
                  className="h-7 w-auto"
                />
              </div>
              <button aria-label="Close menu" className="p-2 rounded hover:bg-gray-100" onClick={() => setMobileOpen(false)}>
                <IconX size={22} />
              </button>
            </div>

            <div className="p-4 border-b border-gray-100">
              <div className="relative">
                <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                <input
                  type="text"
                  placeholder="Search for anything"
                  className="w-full rounded-full border border-gray-300 pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10"
                />
              </div>
            </div>

            <div className="p-4 space-y-2">
              <a href="#" className="block px-3 py-2 rounded hover:bg-gray-100" onClick={() => setMobileOpen(false)}>Discover</a>
              <Menu shadow="md" width={240} withinPortal>
                <Menu.Target>
                  <UnstyledButton className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 flex items-center justify-between">
                    <span>BookShell</span>
                    <IconChevronDown size={16} />
                  </UnstyledButton>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item onClick={() => setMobileOpen(false)}>Course Name</Menu.Item>
                  <Menu.Item onClick={() => setMobileOpen(false)}>Techno Log</Menu.Item>
                  <Menu.Divider />
                  <Menu.Item onClick={() => setMobileOpen(false)}>Projects</Menu.Item>
                  <Menu.Item onClick={() => setMobileOpen(false)}>Online Resourse </Menu.Item>
                </Menu.Dropdown>
              </Menu>
              <Menu shadow="md" width={240} withinPortal>
                <Menu.Target>
                  <UnstyledButton className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 flex items-center justify-between">
                    <span>MoneyMap</span>
                    <IconChevronDown size={16} />
                  </UnstyledButton>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item onClick={() => setMobileOpen(false)}>Course Price</Menu.Item>
                  <Menu.Item onClick={() => setMobileOpen(false)}>Analytic Price</Menu.Item>
                  <Menu.Item onClick={() => setMobileOpen(false)}>DS Price</Menu.Item>
                  <Menu.Item onClick={() => setMobileOpen(false)}>Cyber Price</Menu.Item>
                  <Menu.Item onClick={() => setMobileOpen(false)}>Web Price</Menu.Item>
                  <Menu.Item onClick={() => setMobileOpen(false)}>Cloud Price</Menu.Item>
                  <Menu.Item onClick={() => setMobileOpen(false)}>Savings</Menu.Item>
                </Menu.Dropdown>
              </Menu>
              <Menu shadow="md" width={240} withinPortal>
                <Menu.Target>
                  <UnstyledButton className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 flex items-center justify-between">
                    <span>Community</span>
                    <IconChevronDown size={16} />
                  </UnstyledButton>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item onClick={() => setMobileOpen(false)}>Learning Stories</Menu.Item>
                  <Menu.Item onClick={() => setMobileOpen(false)}>Events</Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </div>

            <div className="p-4 border-t border-gray-100 space-y-3">
              <Menu shadow="md" width={240} withinPortal>
                <Menu.Target>
                  <UnstyledButton className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 flex items-center gap-2">
                    <IconWorld size={18} />
                    <span>Language</span>
                  </UnstyledButton>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Label>Select language</Menu.Label>
                  <Menu.Item onClick={() => setMobileOpen(false)}>English</Menu.Item>
                  <Menu.Item onClick={() => setMobileOpen(false)}>हिन्दी (Hindi)</Menu.Item>
                  <Menu.Item onClick={() => setMobileOpen(false)}>Español (Spanish)</Menu.Item>
                  <Menu.Item onClick={() => setMobileOpen(false)}>Français (French)</Menu.Item>
                  <Menu.Item onClick={() => setMobileOpen(false)}>Deutsch (German)</Menu.Item>
                </Menu.Dropdown>
              </Menu>
              <div className="flex gap-3">
                <Button variant="default" fullWidth onClick={() => setMobileOpen(false)}>Log in</Button>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white" fullWidth onClick={() => setMobileOpen(false)}>Sign up</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}