import Client from './'

export const GetMovies = async () => {
  try {
    const res = await Client.get('/movies')
  } catch (error) {}
}
