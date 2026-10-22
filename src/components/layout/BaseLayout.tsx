import { ReactNode } from "react";
import { SidebarMenu } from "../navigation";
import ActionBar from "../navigation/ActionBar";
import Container from "./Container";

interface BaseLayoutProps {
  className?: string;
  children: ReactNode;
  leftCol: ReactNode;
  rightCol: ReactNode;
  menuOpen: boolean;
}

export function BaseLayout({
  className = "",
  menuOpen = false,
  leftCol,
  rightCol,
  children,
}: BaseLayoutProps) {
  const topClasses =
    "left-0 top-0 absolute bg-Surface-surface-background inline-flex justify-between items-end";

  return (
    <div className={`${topClasses} ${className}`}>
      <div className="flex flex-cols space-between">
        <SidebarMenu
          brandName="Event Management"
          isExpanded={menuOpen}
          onSignOut={() => {
            alert("Message to log out");
          }}
          onToggle={() => { }}
          sections={[
            {
              id: "sales",
              items: [
                {
                  href: "/dashboard",
                  icon: "Home",
                  id: "home",
                  isActive: true,
                  label: "home",
                },
                {
                  href: "/events",
                  icon: "Calendar",
                  id: "events",
                  label: "events",
                },
                {
                  href: "/tickets",
                  icon: "Ticket",
                  id: "tickets",
                  label: "tickets",
                },
                {
                  href: "/groups",
                  icon: "users",
                  id: "groups",
                  label: "groups",
                },
              ],
              title: "Sales",
            },
            {
              id: "customer-management",
              items: [
                {
                  href: "/customers",
                  icon: "user-cog",
                  id: "customer-mgt",
                  label: "customer mgt.",
                },
              ],
              title: "Customer Management",
            },
            {
              id: "administrative",
              items: [
                {
                  href: "/seating-maps",
                  icon: "couch",
                  id: "seating-maps",
                  label: "seating maps",
                },
                {
                  href: "/pricing",
                  icon: "usd-circle",
                  id: "pricing-tables",
                  label: "pricing tables",
                },
                {
                  href: "/discounts",
                  icon: "tag",
                  id: "discounts-promos",
                  label: "discounts & promos",
                },
                {
                  href: "/data-config",
                  icon: "cabinet-filing",
                  id: "data-configuration",
                  label: "Data Configuration",
                },
                {
                  href: "/legal",
                  icon: "balance-scale",
                  id: "legal",
                  label: "ilegal",
                },
                {
                  href: "/system",
                  icon: "Settings",
                  id: "system-staff-mgt",
                  label: "system / staff mgt.",
                },
              ],
              title: "Administrative",
            },
          ]}
        />
        <div className="flex flex-cols">
          {leftCol && <Container> {leftCol}</Container>}
          <Container>{children}</Container>
          {rightCol && <Container>{rightCol}</Container>}
        </div>
      </div>
      <div>
        <ActionBar />
      </div>
    </div>
  );
}

export default BaseLayout;
