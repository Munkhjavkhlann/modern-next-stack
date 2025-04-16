"use client";

import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Settings } from "lucide-react";
import { useStore } from "zustand";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
    TooltipProvider,
    TooltipTrigger,
    TooltipContent,
    Tooltip,
} from "@/components/ui/tooltip";
import { useSidebar } from "@/lib/stores/use-sidebar";


export function DashboardSettings() {
    const sidebar = useStore(useSidebar, (x) => x);
    if (!sidebar) {return null;}
    const { settings, setSettings } = sidebar;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="relative h-8 w-8 rounded-full">
                    <Settings />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-4">
                <TooltipProvider>
                    <div className="flex flex-col gap-6">
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div className="flex items-center space-x-2">
                                    <Switch
                                        id="is-hover-open"
                                        onCheckedChange={(x) => setSettings({ isHoverOpen: x })}
                                        checked={settings.isHoverOpen}
                                    />
                                    <Label htmlFor="is-hover-open">Hover Open</Label>
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>When hovering on the sidebar in mini state, it will open</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div className="flex items-center space-x-2">
                                    <Switch
                                        id="disable-sidebar"
                                        onCheckedChange={(x) => setSettings({ disabled: x })}
                                        checked={settings.disabled}
                                    />
                                    <Label htmlFor="disable-sidebar">Disable Sidebar</Label>
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Hide sidebar</p>
                            </TooltipContent>
                        </Tooltip>
                    </div>
                </TooltipProvider>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}