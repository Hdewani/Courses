import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:4001",
  documents: "src/schema/**/*.gql",
  generates: {
    "src/graphql/": {
      preset: "client",
      plugins: ["typescript-react-apollo"],
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
}

export default config
