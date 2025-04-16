import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    schema: 'YOUR_SCHEMA_URL_OR_PATH',
    documents: ['src/**/*.{ts,tsx}'],
    generates: {
        './src/graphql/generated/': {
            preset: 'client',
            plugins: [
                'typescript',
                'typescript-operations',
                'typescript-react-apollo',
            ],
            config: {
                withHooks: true,
            }
        }
    }
};

export default config;