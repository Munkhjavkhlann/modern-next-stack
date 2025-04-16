import {
  Tag,
  Bookmark,
  SquarePen,
  LayoutGrid,
} from "lucide-react";

import { paths } from "@/routes/paths";

import type { Group } from "@/types/menu";

export function getMenuList(): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: paths.dashboard.root,
          label: "Dashboard",
          icon: LayoutGrid,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "Contents",
      menus: [
        {
          href: "",
          label: "Posts",
          icon: SquarePen,
          submenus: [
            {
              href: paths.dashboard.posts.root,
              label: "All Posts"
            },
            {
              href: paths.dashboard.posts.new,
              label: "New Post"
            }
          ]
        },
        {
          href: paths.dashboard.categories,
          label: "Categories",
          icon: Bookmark,
          submenus: []
        },
        {
          href: paths.dashboard.tags,
          label: "Tags",
          icon: Tag,
          submenus: []
        }
      ]
    }
  ];
}