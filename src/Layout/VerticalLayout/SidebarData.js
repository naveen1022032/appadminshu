const SidebarData = [
    {
        label: "Menu",
        isMainMenu: true,
    },
    {
        label: "Dashboard",
        icon: "mdi mdi-home-variant-outline",
        url: "/dashboard",
        issubMenubadge: true,
        bgcolor: "bg-primary",
        badgeValue: "3"
    },
    {
        label: "Active User",
        icon: "ri-table-2",
        subItem: [
            { sublabel: "User List", link: "/tables-listjs" },
        ],
    },
   
]
export default SidebarData;