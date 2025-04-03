export default defineRstorePlugin({
  name: 'my-api',

  setup({ hook }) {
    hook('fetchMany', (payload) => {
      console.log(payload.model.name)
      payload.setResult([]);
    })
  },
})
