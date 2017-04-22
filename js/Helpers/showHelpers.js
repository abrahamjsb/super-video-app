export const filterShowByText = (show, text) => `${show.title} ${show.description}`.toUpperCase().indexOf(text.toUpperCase()) >= 0
