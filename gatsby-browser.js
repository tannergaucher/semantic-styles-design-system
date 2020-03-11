import { Card, Image, P } from "./src/components"
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live"

import { Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import React from "react"

const scope = {
  Image,
  P,
  Link,
  Card,
}

const components = {
  pre: props => (
    <div>
      <LiveProvider code={props.children.props.children} scope={scope}>
        <LivePreview
          style={{
            marginBottom: `var(--space-lg)`,
            marginTop: `var(--space-lg)`,
          }}
        />
        <LiveEditor
          style={{
            background: `var(--code-bg)`,
            fontFamily: `var(--mono)`,
            borderRadius: `var(--radius)`,
            boxShadow: `var(--elevation-2)`,
            margin: `var(--space-lg) 0`,
            fontSize: `var(--text-sm)`,
          }}
        />
        <LiveError
          style={{
            fontSize: `var(--text-xs)`,
            borderRadius: `var(--radius)`,
            margin: `var(--space-lg) 0`,
            boxShadow: `var(--elevation-3)`,
            color: `papayawhip`,
            background: `var(--code-bg)`,
            padding: `var(--space-sm)`,
          }}
        />
      </LiveProvider>
    </div>
  ),
}

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}
