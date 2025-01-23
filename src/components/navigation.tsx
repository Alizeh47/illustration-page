import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@radix-ui/react-navigation-menu"

export function Navigation() {
  return (
    <NavigationMenu className="relative">
      <NavigationMenuList className="flex gap-6 p-4">
        <NavigationMenuItem>
          <NavigationMenuLink className="hover:text-gray-600" href="/">
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className="hover:text-gray-600" href="/about">
            About
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className="hover:text-gray-600" href="/contact">
            Contact
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
} 