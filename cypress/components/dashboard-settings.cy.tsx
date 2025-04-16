import { create } from 'zustand';

import { DashboardSettings } from '@/layout/dashboard-layout/dashboard-settings';

import type { StoreApi, UseBoundStore } from 'zustand';

interface SidebarSettings {
    disabled: boolean;
    isHoverOpen: boolean;
}

interface SidebarStore {
    isOpen: boolean;
    isHover: boolean;
    settings: SidebarSettings;
    toggleOpen: () => void;
    setIsOpen: (isOpen: boolean) => void;
    setIsHover: (isHover: boolean) => void;
    getOpenState: () => boolean;
    setSettings: (settings: Partial<SidebarSettings>) => void;
}

const mockSidebarStore: UseBoundStore<StoreApi<SidebarStore>> = create<SidebarStore>((set, get) => ({
    isOpen: true,
    isHover: false,
    settings: { disabled: false, isHoverOpen: false },
    toggleOpen: () => set({ isOpen: !get().isOpen }),
    setIsOpen: (isOpen: boolean) => set({ isOpen }),
    setIsHover: (isHover: boolean) => set({ isHover }),
    getOpenState: () => {
        const state = get();
        return state.isOpen || (state.settings.isHoverOpen && state.isHover);
    },
    setSettings: (settings: Partial<SidebarSettings>) =>
        set((state: SidebarStore) => ({ settings: { ...state.settings, ...settings } })),
}));

describe('DashboardSettings', () => {
    beforeEach(() => {
        cy.mount(<DashboardSettings />);
    });

    it('renders the settings button', () => {
        cy.get('button').contains('svg').should('exist');
    });

    it('opens the dropdown when clicking the settings button', () => {
        cy.get('button').click();
        cy.get('[role="menu"]').should('be.visible');
        cy.contains('Hover Open').should('exist');
        cy.contains('Disable Sidebar').should('exist');
    });

    it('toggles the Hover Open switch', () => {
        cy.get('button').click();
        cy.get('#is-hover-open').click();
        cy.get('#is-hover-open').should('be.checked');
        cy.wrap(mockSidebarStore.getState().settings.isHoverOpen).should('be.true');
    });

    it('toggles the Disable Sidebar switch', () => {
        cy.get('button').click();
        cy.get('#disable-sidebar').click();
        cy.get('#disable-sidebar').should('be.checked');
        cy.wrap(mockSidebarStore.getState().settings.disabled).should('be.true');
    });

    it('displays tooltips on hover', () => {
        cy.get('button').click();
        cy.get('.flex.items-center').first().trigger('mouseover');
        cy.contains('When hovering on the sidebar in mini state, it will open').should('be.visible');
    });
});