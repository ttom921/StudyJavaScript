export default {
    input: 'src/scripts/main.js',
    output: {
        file: 'build/js/bundle.min.js',
        format: 'umd',
        name: 'Animals',
        sourceMap: true // 'inline'
    }
}