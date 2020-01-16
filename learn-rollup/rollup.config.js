export default {
    input: 'src/scripts/main.js',
    output: {
        file: 'build/js/bundle.min.js',
        format: 'iife',
        name: 'bundle',
        sourceMap: true // 'inline'
    }
}