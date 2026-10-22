/* ===================================
   LAYOUT STORIES
   =================================== */

import type { Meta, StoryObj } from '@storybook/react'
import { Layout } from '@/components/layout'
import { sampleSidebarMenuData } from '@/components/navigation/sidebarMenuData'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/dataInput/Input'
import { Card } from '@/components/dataDisplay/Card'

const meta: Meta<typeof Layout> = {
  title: 'Layout/Layout',
  component: Layout,
  parameters: {
    docs: {
      description: {
        component: 'Componente Layout completo con SidebarMenu, ActionBar y sistema de columnas flexible.'
      }
    }
  },
  argTypes: {
    sidebarSections: {
      control: 'object',
      description: 'Secciones del menú lateral'
    },
    sidebarExpanded: {
      control: 'boolean',
      description: 'Si el sidebar está expandido'
    },
    brandName: {
      control: 'text',
      description: 'Nombre de la marca'
    }
  },
  args: {
    sidebarSections: sampleSidebarMenuData,
    sidebarExpanded: true,
    brandName: 'Admin Panel'
  }
}

export default meta
type Story = StoryObj<typeof meta>

// Ejemplo con 2 columnas
export const TwoColumns: Story = {
  args: {
    columns: [
      {
        id: 'main-content',
        title: 'Contenido Principal',
        width: '1/3',
        content: (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-text-primary">Dashboard Principal</h2>
            <p className="text-text-secondary">
              Este es el contenido principal del dashboard. Aquí puedes mostrar gráficos, 
              estadísticas y otra información importante.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Card padding="md" shadow="sm">
                <h3 className="font-semibold text-text-primary">Ventas</h3>
                <p className="text-2xl font-bold text-cta-accent">$12,345</p>
              </Card>
              <Card padding="md" shadow="sm">
                <h3 className="font-semibold text-text-primary">Usuarios</h3>
                <p className="text-2xl font-bold text-cta-accent">1,234</p>
              </Card>
            </div>
          </div>
        )
      },
      {
        id: 'sidebar-content',
        title: 'Panel Lateral',
        width: '1/3',
        content: (
          <div className="space-y-4">
            <h3 className="font-semibold text-text-primary">Acciones Rápidas</h3>
            <div className="space-y-2">
              <Button variant="ctaAccent" size="sm" className="w-full">
                Crear Evento
              </Button>
              <Button variant="ctaHover" size="sm" className="w-full">
                Ver Reportes
              </Button>
              <Button variant="outlineAccent" size="sm" className="w-full">
                Configuración
              </Button>
            </div>
            <div className="border-t border-button-grey pt-4">
              <h4 className="font-medium text-text-primary mb-2">Notificaciones</h4>
              <div className="space-y-2 text-sm text-text-secondary">
                <p>• Nuevo evento creado</p>
                <p>• 5 tickets vendidos</p>
                <p>• Usuario registrado</p>
              </div>
            </div>
          </div>
        )
      }
    ],
    actionBar: {
      title: 'Dashboard',
      subtitle: 'Resumen de actividades',
      position: 'bottom',
      actions: (
        <div className="flex space-x-2">
          <Button variant="outlineAccent" size="sm">
            Exportar
          </Button>
          <Button variant="ctaAccent" size="sm">
            Nuevo
          </Button>
        </div>
      )
    }
  }
}

// Ejemplo con 3 columnas
export const ThreeColumns: Story = {
  args: {
    columns: [
      {
        id: 'left-panel',
        title: 'Panel Izquierdo',
        width: '1/3',
        content: (
          <div className="space-y-4">
            <Input
              label="Buscar"
              placeholder="Buscar eventos..."
              className="w-full"
            />
            <div className="space-y-2">
              <h4 className="font-medium text-text-primary">Filtros</h4>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm text-text-secondary">Eventos activos</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm text-text-secondary">Eventos próximos</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm text-text-secondary">Eventos pasados</span>
                </label>
              </div>
            </div>
          </div>
        )
      },
      {
        id: 'main-content',
        title: 'Lista de Eventos',
        width: '1/3',
        content: (
          <div className="space-y-4">
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((item) => (
                <Card key={item} padding="sm" shadow="sm">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-text-primary">Evento {item}</h4>
                      <p className="text-sm text-text-secondary">Fecha: 2024-01-{item + 10}</p>
                    </div>
                    <Button variant="outlineAccent" size="sm">
                      Ver
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )
      },
      {
        id: 'right-panel',
        title: 'Detalles',
        width: '1/3',
        content: (
          <div className="space-y-4">
            <Card padding="md" shadow="sm">
              <h4 className="font-semibold text-text-primary mb-2">Estadísticas</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Total eventos:</span>
                  <span className="text-text-primary font-medium">25</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Vendidos:</span>
                  <span className="text-text-primary font-medium">18</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Disponibles:</span>
                  <span className="text-text-primary font-medium">7</span>
                </div>
              </div>
            </Card>
            <Card padding="md" shadow="sm">
              <h4 className="font-semibold text-text-primary mb-2">Acciones</h4>
              <div className="space-y-2">
                <Button variant="ctaAccent" size="sm" className="w-full">
                  Crear Evento
                </Button>
                <Button variant="outlineAccent" size="sm" className="w-full">
                  Importar
                </Button>
              </div>
            </Card>
          </div>
        )
      }
    ],
    actionBar: {
      title: 'Gestión de Eventos',
      subtitle: '25 eventos encontrados',
      position: 'top',
      actions: (
        <div className="flex space-x-2">
          <Button variant="outlineAccent" size="sm">
            Filtros
          </Button>
          <Button variant="ctaAccent" size="sm">
            Nuevo Evento
          </Button>
        </div>
      )
    }
  }
}

// Ejemplo con contenido personalizado (sin columnas)
export const CustomContent: Story = {
  args: {
    children: (
      <div className="space-y-6">
        <div className="bg-cta-accent/10 border border-cta-accent/20 rounded-lg p-6">
          <h1 className="text-2xl font-bold text-cta-accent mb-4">
            Bienvenido al Panel de Administración
          </h1>
          <p className="text-text-secondary">
            Este es un ejemplo de contenido personalizado sin usar el sistema de columnas.
            Puedes colocar cualquier contenido aquí.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Card key={item} padding="md" shadow="md">
              <h3 className="font-semibold text-text-primary mb-2">
                Tarjeta {item}
              </h3>
              <p className="text-text-secondary text-sm">
                Contenido de la tarjeta {item}. Este es un ejemplo de contenido 
                en una tarjeta dentro del layout.
              </p>
              <Button variant="outlineAccent" size="sm" className="mt-4">
                Acción
              </Button>
            </Card>
          ))}
        </div>
      </div>
    ),
    actionBar: {
      title: 'Panel Principal',
      subtitle: 'Contenido personalizado',
      position: 'bottom',
      actions: (
        <Button variant="ctaAccent" size="sm">
          Configurar
        </Button>
      )
    }
  }
}

// Ejemplo con sidebar colapsado
export const CollapsedSidebar: Story = {
  args: {
    ...TwoColumns.args!,
    sidebarExpanded: false
  }
}

// Ejemplo sin sidebar
export const NoSidebar: Story = {
  args: {
    ...TwoColumns.args!,
    sidebarSections: []
  }
}

// Ejemplo con ActionBar flotante
export const FloatingActionBar: Story = {
  args: {
    ...TwoColumns.args!,
    actionBar: {
      ...TwoColumns.args!.actionBar,
      variant: 'floating'
    }
  }
}