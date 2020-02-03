import { Injectable } from '@angular/core';

import { GenericMenuItem, MenuBarItem, MenuItem, MenuItemCheckbox, MenuItemRadio } from './components/menu-bar/models/menu-bar';

@Injectable()
export class MenuBarService {

  menuBarItems: MenuBarItem[] = [
    {
      title: 'File',
      items: [
        {
          title: 'Share...',
          icon: 'person_add'
        },
        {
          type: 'divider'
        },
        {
          title: 'New',
          svgIcon: 'mdi:file-document-box-plus',
          children: [
            {
              title: 'Document',
              svgIcon: 'mdi:file-document-box'
            },
            {
              title: 'Spreadsheet',
              svgIcon: 'mdi:google-spreadsheet'
            },
            {
              title: 'Presentation',
              svgIcon: 'mdi:file-presentation-box'
            },
            {
              title: 'Form',
              svgIcon: 'mdi:poll-box'
            },
            {
              title: 'Drawing',
              svgIcon: 'mdi:drawing-box'
            },
            {
              type: 'divider'
            },
            {
              title: 'File',
              svgIcon: 'mdi:file',
              command: '⌘N'
            },
            {
              title: 'Upload file...',
              icon: 'file_upload'
            }
          ]
        },
        {
          title: 'Open...',
          icon: 'folder_open',
          command: '⌘O'
        },
        {
          title: 'Duplicate',
          icon: 'file_copy',
          command: '⌘D'
        },
        {
          type: 'divider'
        },
        {
          title: 'Rename',
          svgIcon: 'mdi:rename-box'
        },
        {
          title: 'Move...',
          svgIcon: 'mdi:file-move'
        },
        {
          title: 'Move to bin',
          icon: 'delete'
        },
        {
          type: 'divider'
        },
        {
          title: 'Print',
          icon: 'print',
          command: '⌘P'
        }
      ]
    },
    {
      title: 'Edit',
      items: [
        {
          title: 'Undo',
          icon: 'undo',
          command: '⌘Z'
        },
        {
          title: 'Redo',
          icon: 'redo',
          command: '⌘Y'
        },
        {
          type: 'divider'
        },
        {
          title: 'Cut',
          icon: 'content_cut',
          command: '⌘X',
          disabled: true
        },
        {
          title: 'Copy',
          icon: 'content_copy',
          command: '⌘C',
          disabled: true
        },
        {
          title: 'Paste',
          icon: 'content_paste',
          command: '⌘V',
          disabled: true
        },
        {
          title: 'Delete',
          icon: 'backspace',
          command: 'Backspace'
        },
        {
          title: 'Select all',
          icon: 'select_all',
          command: '⌘A'
        },
        {
          type: 'divider'
        },
        {
          title: 'Find',
          icon: 'find_in_page',
          command: '⌘F'
        },
        {
          title: 'Find & Replace',
          icon: 'find_replace',
          command: '⌘+Option+F'
        }
      ]
    },
    {
      title: 'View',
      items: [
        {
          type: 'checkbox',
          title: 'Print layout',
          value: true
        },
        {
          type: 'radio',
          title: 'Mode',
          icon: 'edit',
          value: 'edit',
          children: [
            {
              title: 'Editing',
              value: 'edit'
            },
            {
              title: 'Suggesting',
              value: 'suggest'
            },
            {
              title: 'Viewing',
              value: 'view'
            }
          ]
        },
        {
          type: 'divider'
        },
        {
          type: 'checkbox',
          title: 'Show ruler',
          value: true
        },
        {
          type: 'checkbox',
          title: 'Show equation toolbar',
          value: false
        },
        {
          type: 'checkbox',
          title: 'Show spelling suggestions',
          value: true
        },
        {
          type: 'divider'
        },
        {
          type: 'checkbox',
          title: 'Fullscreen',
          value: false
        }
      ]
    },
    {
      title: 'Format',
      items: [
        {
          title: 'Left-to-right text',
          icon: 'format_textdirection_l_to_r'
        },
        {
          title: 'Right-to-left text',
          icon: 'format_textdirection_r_to_l'
        },
        {
          type: 'divider'
        },
        {
          title: 'Text',
          icon: 'text_format',
          children: [
            {
              title: 'Bold',
              icon: 'format_bold',
              command: '⌘B'
            },
            {
              title: 'Italic',
              icon: 'format_italic',
              command: '⌘I'
            },
            {
              title: 'Underline',
              icon: 'format_underline',
              command: '⌘U'
            },
            {
              title: 'Strike-through',
              icon: 'strikethrough_s',
              command: '⌘+Shift+X'
            },
            {
              title: 'Superscript',
              svgIcon: 'mdi:format-superscript',
              command: '⌘.'
            },
            {
              title: 'Subscript',
              svgIcon: 'mdi:format-subscript',
              command: '⌘,'
            },
            {
              type: 'divider'
            },
            {
              title: 'Size',
              icon: 'format_size',
              children: [
                {
                  title: 'Increase font size',
                  svgIcon: 'mdi:format-font-size-increase',
                  command: '⌘+Shift+.'
                },
                {
                  title: 'Decrease font size',
                  svgIcon: 'mdi:format-font-size-decrease',
                  command: '⌘+Shift+,'
                }
              ]
            },
            {
              title: 'Capitalisation',
              svgIcon: 'mdi:format-letter-case',
              children: [
                {
                  title: 'lower case',
                  svgIcon: 'mdi:format-letter-case-lower'
                },
                {
                  title: 'UPPER CASE',
                  svgIcon: 'mdi:format-letter-case-upper'
                },
                {
                  title: 'Title Case',
                  svgIcon: 'mdi:format-letter-case'
                }
              ]
            }
          ]
        },
        {
          title: 'Align & indent',
          children: [
            {
              title: 'Left',
              icon: 'format_align_left',
              command: '⌘+Shift+L'
            },
            {
              title: 'Center',
              icon: 'format_align_center',
              command: '⌘+Shift+E'
            },
            {
              title: 'Right',
              icon: 'format_align_right',
              command: '⌘+Shift+R'
            },
            {
              title: 'Justified',
              icon: 'format_align_justify',
              command: '⌘+Shift+J'
            },
            {
              type: 'divider'
            },
            {
              title: 'Increase indent size',
              icon: 'format_indent_increase',
              command: '⌘]'
            },
            {
              title: 'Decrease indent size',
              icon: 'format_indent_decrease',
              command: '⌘['
            }
          ]
        },
        {
          type: 'radio',
          title: 'Line spacing',
          icon: 'format_line_spacing',
          value: 'spacing-1.15',
          children: [
            {
              title: 'Single',
              value: 'spacing-single'
            },
            {
              title: '1.15',
              value: 'spacing-1.15'
            },
            {
              title: '1.5',
              value: 'spacing-1.5'
            },
            {
              title: 'Double',
              value: 'spacing-double'
            }
          ]
        },
        {
          type: 'divider'
        },
        {
          title: 'Clear formatting',
          icon: 'format_clear',
          command: '⌘\\'
        }
      ]
    },
    {
      title: 'Help',
      items: [
        {
          title: 'Find action...',
          icon: 'search',
          command: 'Option+/'
        },
        {
          type: 'divider'
        },
        {
          title: 'Docs Help',
          icon: 'help',
          command: '⌘+Shift+/'
        },
        {
          title: 'What\'s new',
          icon: 'new_releases'
        },
        {
          type: 'divider'
        },
        {
          title: 'Send feedback',
          icon: 'feedback'
        },
        {
          type: 'divider'
        },
        {
          title: 'Keyboard shortcuts',
          icon: 'keyboard',
          command: '⌘/'
        }
      ]
    }
  ]

  customMenuBarItems: MenuBarItem[] = [
    {
      title: 'Menu 1',
      items: [
        {
          title: 'Menu item 1'
        },
        {
          title: 'Menu item 2 (with icon)',
          icon: 'content_cut'
        },
        {
          title: 'Menu item 3 (with command)',
          command: '⌘+Shift+A'
        },
        {
          title: 'Menu item 4 (disabled)',
          disabled: true
        },
        {
          type: 'divider'
        },
        {
          title: 'Menu item 5 (with submenu)',
          children: [
            {
              title: 'Submenu item 1'
            },
            {
              title: 'Submenu item 2 (with icon)',
              icon: 'file_upload'
            },
            {
              title: 'Submenu item 3 (with command)',
              command: '⌘R'
            },
            {
              title: 'Submenu item 4 (disabled)',
              disabled: true
            },
            {
              type: 'divider'
            },
            {
              title: 'Submenu item 4 (with submenu)',
              children: [
                {
                  title: 'Submenu submenu item 1'
                },
                {
                  title: 'Submenu submenu item 2'
                },
                {
                  title: 'Submenu submenu item 3'
                }
              ]
            }
          ]
        },
        {
          title: 'Menu item 6 (with submenu and icon, disabled)',
          icon: 'apps',
          disabled: true,
          children: [
            {
              title: 'Submenu item 1'
            }
          ]
        }
      ]
    },
    {
      title: 'Menu 2',
      items: [
        {
          type: 'checkbox',
          title: 'Checkbox menu item 1 (value = true)',
          value: true
        },
        {
          type: 'checkbox',
          title: 'Checkbox menu item 2 (with command, and value = false)',
          value: false,
          command: '⌘+Option+S'
        },
        {
          type: 'checkbox',
          title: 'Checkbox menu item 3 (disabled, value = true)',
          value: true,
          disabled: true
        },
        {
          title: 'Menu item with submenu',
          children: [
            {
              type: 'checkbox',
              title: 'Checkbox submenu item 1 (value = true)',
              value: true
            },
            {
              type: 'checkbox',
              title: 'Checkbox submenu item 2 (with command, and value = false)',
              value: false,
              command: '⌘+Option+S'
            },
            {
              type: 'checkbox',
              title: 'Checkbox submenu item 3 (disabled, value = true)',
              value: true,
              disabled: true
            }
          ]
        },
        {
          type: 'radio',
          title: 'Radio menu item 1 (value = \'radio-3\')',
          value: 'radio-3',
          children: [
            {
              title: 'Radio submenu item 1 (value = \'radio-1\')',
              value: 'radio-1'
            },
            {
              title: 'Radio submenu item 2 (value = \'radio-2\', disabled)',
              value: 'radio-2',
              disabled: true
            },
            {
              title: 'Radio submenu item 3 (value = \'radio-3\')',
              value: 'radio-3'
            }
          ]
        }
      ]
    },
    {
      title: 'Menu 3 (disabled)',
      disabled: true,
      items: []
    }
  ]

  constructor() {
    this.menuBarItems.forEach(menu => {
      if (menu.items) {
        menu.items.forEach(item => {
          if (!('type' in item) || item.type !== 'divider') {
            this.setItemListeners(item);
          }
        });
      }
    });
    this.customMenuBarItems.forEach(menu => {
      if (menu.items) {
        menu.items.forEach(item => this.setItemListeners);
      }
    });
  }

  private setItemListeners(item: MenuItem) {
    if (!('type' in item) || item.type !== 'divider') {
      if (!item.children || item.children.length === 0) {
        item.onClick = this.itemOnClick;
      }

      if ('type' in item && (item.type === 'checkbox' || item.type === 'radio')) {
        item.onValueChange = (oldValue: string | boolean, newValue: string | boolean) => this.itemOnChange(item, oldValue, newValue);
      }

      if (item.children && item.children.length > 0) {
        item.children.forEach((item: MenuItem) => this.setItemListeners);
      }
    }
  }

  private itemOnClick(item: GenericMenuItem, ev?: Event) {
    if (ev) {
      console.log(`${item.title} was clicked with event:`, ev);
    } else {
      console.log(`${item.title} was clicked with event:`);
    }
  }

  private itemOnChange(item: MenuItemCheckbox | MenuItemRadio, oldValue: string | boolean, newValue: string | boolean) {
    console.log(`${item.title}'s value was changed from`, oldValue, 'to', newValue);
  }
}
