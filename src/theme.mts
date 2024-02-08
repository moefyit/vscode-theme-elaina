import { darken, toHex, lighten, transparentize } from 'color2k'
import { primaryColor, basicColors, uiColors, tokenHighlightColors } from './colors.mjs'

export const theme = {
  $schema: 'vscode://schemas/color-theme',
  name: 'Elaina',
  type: 'dark',
  colors: {
    foreground: uiColors.foreground,
    'editor.background': uiColors.background,
    'editor.foreground': uiColors.foreground,

    // Title Bar
    'titleBar.activeBackground': uiColors.background,

    // Activity Bar
    'activityBar.background': toHex(darken(uiColors.background, 0.03)),
    'activityBar.foreground': primaryColor,
    'activityBar.inactiveForeground': uiColors.inactiveForeground,
    'activityBarBadge.background': uiColors.badgeBackground,
    'activityBarBadge.foreground': toHex(darken(uiColors.background, 0.03)), // Same as activityBar.background

    // Side Bar
    'sideBar.background': toHex(lighten(uiColors.background, 0.01)),
    'sideBar.foreground': uiColors.inactiveForeground,
    'sideBarSectionHeader.background': uiColors.background,
    'sideBarTitle.foreground': primaryColor,
    'progressBar.background': uiColors.info,
    'badge.background': uiColors.badgeBackground,
    'badge.foreground': toHex(uiColors.background),
    'scrollbar.shadow': toHex(transparentize(uiColors.border, 0.8)),

    // List
    'list.hoverBackground': toHex(darken(uiColors.background, 0.01)),
    'list.inactiveSelectionBackground': toHex(darken(uiColors.background, 0.02)),
    'list.activeSelectionBackground': toHex(darken(uiColors.background, 0.03)),
    'list.dropBackground': toHex(darken(uiColors.background, 0.03)),
    focusBorder: toHex(transparentize(uiColors.border, 0.5)),

    // Tab
    'editorGroup.dropBackground': uiColors.dropBackground,
    'editorGroupHeader.tabsBackground': toHex(lighten(uiColors.background, 0.03)),
    'tab.activeBackground': uiColors.background,
    'tab.inactiveBackground': toHex(lighten(uiColors.background, 0.03)),
    'tab.activeForeground': uiColors.activeForeground,
    'tab.inactiveForeground': uiColors.inactiveForeground,

    // Status Bar
    'statusBar.background': toHex(darken(uiColors.background, 0.05)),
    'statusBar.debuggingBackground': '#FC644D',
    'statusBar.noFolderBackground': '#23262E',
    'statusBarItem.activeBackground': '#00e8c5cc',
    'statusBarItem.hoverBackground': toHex(transparentize(primaryColor, 0.5)),
    'statusBarItem.prominentBackground': '#07d4b5b0',
    'statusBarItem.prominentHoverBackground': '#00e8c5cc',
    'statusBarItem.remoteBackground': uiColors.buttonBackground,
    'statusBarItem.remoteForeground': toHex(darken(uiColors.background, 0.05)),
    'statusBarItem.warningBackground': toHex(transparentize('yellow', 0.5)),
    'statusBarItem.errorBackground': toHex(transparentize('red', 0.5)),

    // Editor
    'editor.lineHighlightBorder': toHex(transparentize(uiColors.border, 0.8)),
    'editor.selectionBackground': toHex(transparentize(uiColors.selectionBackground, 0.8)),
    'editor.inactiveSelectionBackground': toHex(transparentize(uiColors.selectionBackground, 0.9)),
    'editorCursor.foreground': toHex(transparentize(primaryColor, 0.2)),

    // Terminal
    'terminal.ansiRed': basicColors.red,
    'terminal.ansiGreen': basicColors.green,
    'terminal.ansiYellow': basicColors.yellow,
    'terminal.ansiBlue': basicColors.blue,
    'terminal.ansiMagenta': basicColors.pink,
    'terminal.ansiCyan': basicColors.cyan,
    'terminal.ansiBrightRed': basicColors.red,
    'terminal.ansiBrightGreen': basicColors.green,
    'terminal.ansiBrightYellow': basicColors.yellow,
    'terminal.ansiBrightBlue': basicColors.blue,
    'terminal.ansiBrightMagenta': basicColors.pink,
    'terminal.ansiBrightCyan': basicColors.cyan,
    'terminalCursor.background': uiColors.background,
    'terminalCursor.foreground': primaryColor,
    'terminalStickyScrollHover.background': toHex(darken(uiColors.background, 0.03)),

    // Inlay Hint
    'editorInlayHint.background': uiColors.inlayHintBackground,
    'editorInlayHint.foreground': uiColors.inlayHintForeground,
    'editorInlayHint.typeBackground': uiColors.inlayHintBackground,
    'editorInlayHint.typeForeground': uiColors.inlayHintForeground,

    // Button
    'button.background': uiColors.buttonBackground,
    'button.foreground': uiColors.background,
    'button.hoverBackground': toHex(lighten(uiColors.buttonBackground, 0.05)),

    // Input
    'input.background': toHex(lighten(uiColors.background, 0.03)),
    'input.border': toHex(lighten(uiColors.background, 0.1)),
    'input.foreground': toHex(lighten(primaryColor, 0.08)),
    'input.placeholderForeground': uiColors.inactiveForeground,

    // Dropdown
    'dropdown.background': toHex(darken(uiColors.background, 0.03)),

    // PeekView
    'peekView.border': uiColors.background,
    'peekViewEditor.background': basicColors.black,
    'peekViewEditor.matchHighlightBackground': uiColors.matchHighlightBackground,
    'peekViewResult.background': basicColors.black,
    'peekViewResult.matchHighlightBackground': uiColors.matchHighlightBackground,
    'peekViewResult.selectionBackground': uiColors.background,
    'peekViewTitle.background': basicColors.black,
    'peekViewTitleDescription.foreground': uiColors.activeForeground,

    // Mini Map
    'minimap.background': toHex(darken(uiColors.background, 0.05)),

    // Widgets
    'quickInput.background': toHex(darken(uiColors.background, 0.05)),
    'editorSuggestWidget.background': toHex(darken(uiColors.background, 0.05)),
    'editorSuggestWidget.selectedBackground': toHex(lighten(uiColors.background, 0.03)),
    'editorWidget.background': toHex(darken(uiColors.background, 0.05)),
    'widget.shadow': toHex(transparentize(uiColors.border, 0.8)),

    // Info & Warning & Error
    'editorError.foreground': uiColors.error,
    'editorWarning.foreground': uiColors.warning,
    'editorInfo.foreground': uiColors.info,
  },
  semanticHighlighting: true,
  semanticTokenColors: {
    module: tokenHighlightColors.module,
    variable: tokenHighlightColors.variable,
    method: tokenHighlightColors.method,
    'variable.readonly': tokenHighlightColors.constant,
    builtinConstant: tokenHighlightColors.literal,
    property: tokenHighlightColors.property,
    'property.readonly': tokenHighlightColors.property,
    type: tokenHighlightColors.type,
    class: tokenHighlightColors.class,
    function: tokenHighlightColors.function,
    macro: tokenHighlightColors.macro,
    struct: tokenHighlightColors.struct,
    'comment.documentation': tokenHighlightColors.documentation,
  },
  tokenColors: [
    {
      name: 'Comment',
      scope: ['comment', 'markup.quote.markdown', 'meta.diff', 'meta.diff.header'],
      settings: {
        foreground: tokenHighlightColors.comment,
      },
    },
    {
      name: 'Text',
      scope: [
        'meta.template.expression.js',
        'constant.name.attribute.tag.jade',
        'punctuation.definition.metadata.markdown',
        'punctuation.definition.string.end.markdown',
        'punctuation.definition.string.begin.markdown',
      ],
      settings: {
        foreground: tokenHighlightColors.text,
      },
    },
    {
      name: 'String',
      scope: [
        'string',
        'text.html.php string',
        'markup.inline.raw',
        'markup.inserted',
        'punctuation.definition.string',
        'punctuation.definition.markdown',
        'text.html meta.embedded source.js string',
        'text.html.php punctuation.definition.string',
        'text.html meta.embedded source.js punctuation.definition.string',
        'text.html punctuation.definition.string',
        'text.html string',
      ],
      settings: {
        foreground: tokenHighlightColors.string,
      },
    },
    {
      name: 'Docs',
      scope: [
        // For Python Docstring
        'string.quoted.docstring punctuation.definition.string.begin.python',
        'string.quoted.docstring',
        'string.quoted.docstring punctuation.definition.string.end.python',
        // For Java javadoc
        'comment.block.javadoc',
        // For Rust doc
        'comment.line.documentation.rust',
        // For Other Languages
        'comment.block.documentation',
      ],
      settings: {
        foreground: tokenHighlightColors.documentation,
        fontStyle: 'italic',
      },
    },
    {
      name: 'RegExp',
      scope: [
        'source.regexp',
        'string.regexp',
        // For Python Docstring
        'string.regexp.quoted.multi punctuation.definition.string.begin.python',
        'string.regexp.quoted.multi punctuation.definition.string.end.python',
      ],
      settings: {
        foreground: tokenHighlightColors.regex,
      },
    },
    {
      name: 'Module',
      scope: [
        // For JavaScript
        'meta.import.js string.quoted',
        'meta.import.ts string.quoted',
        'meta.import.jsx string.quoted',
        'meta.import.tsx string.quoted',
        // For Java
        'storage.modifier.import.java',
        'storage.modifier.package.java',
        // For Rust
        'meta.use.rust entity.name.namespace.rust',
        'entity.name.module.rust',
        // For C/C++
        'meta.preprocessor.include.c punctuation.definition.string.begin.c',
        'meta.preprocessor.include.c string.quoted',
        'meta.preprocessor.include.c punctuation.definition.string.end.c',
        'meta.preprocessor.include.cpp punctuation.definition.string.begin.cpp',
        'meta.preprocessor.include.cpp string.quoted',
        'meta.preprocessor.include.cpp punctuation.definition.string.end.cpp',
        // For Golang
        'entity.name.import.go',
        'entity.name.package.go',
      ],
      settings: {
        foreground: tokenHighlightColors.module,
      },
    },
    {
      name: 'Variable',
      scope: ['variable', 'identifier'],
      settings: {
        foreground: tokenHighlightColors.variable,
      },
    },
    {
      name: 'Key',
      scope: [
        // For JSON
        'meta.structure.dictionary.json support.type.property-name',
        // For YAML
        'entity.name.tag.yaml',
        // For TOML
        'support.type.property-name.table.toml',
        'support.type.property-name.toml',
        // For HTML
        'constant.character.entity.html',
        // For CSS
        'source.css entity.name.tag.reference',
        'source.css entity.other.attribute-name.parent-selector',
        // For Markdown
        'beginning.punctuation.definition.list.markdown',
        // For JavaScript Object
        'meta.object-literal.key',
      ],
      settings: {
        foreground: tokenHighlightColors.key,
      },
    },
    {
      name: 'Object Self',
      scope: [
        'markup.heading',
        // Fot JavaScript
        'variable.language.this.js',
        // For TypeScript
        'variable.language.this.ts',
        // For C++
        'variable.language.this.cpp',
        // For Rust
        'variable.language.self.rust',
        // For Python
        'variable.language.special.self.python',
      ],
      settings: {
        foreground: tokenHighlightColors.objectSelf,
      },
    },
    {
      name: 'Literal',
      scope: ['constant.numeric'],
      settings: {
        foreground: tokenHighlightColors.literal,
      },
    },
    {
      name: 'Property',
      scope: [
        'variable.other.property',
        'entity.other.attribute-name',
        'source.css keyword.other.unit',
        'variable.other.object.property.js.jsx',
        'variable.other.object.js',
      ],
      settings: {
        foreground: tokenHighlightColors.property,
      },
    },
    {
      name: 'Exception',
      scope: ['support.type.exception.python'],
      settings: {
        foreground: tokenHighlightColors.exception,
      },
    },
    {
      name: 'Constant',
      scope: ['constant', 'support.constant'],
      settings: {
        foreground: tokenHighlightColors.constant,
      },
    },
    {
      name: 'Operator',
      scope: ['keyword.operator'],
      settings: {
        foreground: tokenHighlightColors.operator,
      },
    },
    {
      name: 'Class',
      scope: ['support.class'],
      settings: {
        foreground: tokenHighlightColors.class,
      },
    },
    {
      name: 'Function',
      scope: [
        'entity.name.function',
        'source.css support.function',
        'source.php support.function',
        'meta.function-call',
        'support.function.magic.python',
      ],
      settings: {
        foreground: tokenHighlightColors.function,
      },
    },
    {
      name: 'Type',
      scope: ['entity.name.type', 'support.type.python'],
      settings: {
        foreground: tokenHighlightColors.type,
      },
    },
    {
      name: 'Tag',
      scope: ['entity.name.tag', 'tag.html'],
      settings: {
        foreground: tokenHighlightColors.tag,
      },
    },
    {
      name: 'Keyword',
      scope: ['keyword'],
      settings: {
        foreground: tokenHighlightColors.keyword,
      },
    },
    {
      name: 'Storage',
      scope: ['storage'],
      settings: {
        foreground: tokenHighlightColors.storage,
      },
    },
    // Markup specific
    {
      name: 'Markup Bold',
      scope: ['markup.bold'],
      settings: {
        foreground: basicColors.orange,
        fontStyle: 'bold',
      },
    },
    {
      name: 'Markup Italic',
      scope: ['markup.italic'],
      settings: {
        foreground: basicColors.blue,
        fontStyle: 'italic',
      },
    },
    {
      name: 'Math',
      scope: [
        'punctuation.definition.math.begin.markdown',
        'punctuation.definition.math.end.markdown',
      ],
      settings: {
        foreground: basicColors.blue,
      },
    },
    {
      name: 'Link',
      scope: ['meta.link', 'meta.image', 'source.js support.type'],
      settings: {
        foreground: tokenHighlightColors.link,
      },
    },
    {
      name: 'URL',
      scope: ['*url*', '*link*', '*uri*'],
      settings: {
        fontStyle: 'underline',
      },
    },
    // Font Styles
    {
      name: 'Underline',
      scope: ['entity.other.inherited-class'],
      settings: {
        fontStyle: 'underline',
      },
    },
    {
      name: 'Italic',
      scope: ['comment', 'invalid', 'keyword', 'entity.other.attribute-name'],
      settings: {
        fontStyle: 'italic',
      },
    },
  ],
}
