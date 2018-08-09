

export function fetchNewsletter() {

    const response = {
        data: [
            {
                _id: '123',
                title: 'Rawr - Scary sockee',
                body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                date: new Date(),
                imageUrl: 'http://via.placeholder.com/960x258'
            },
            {
                _id: '123',
                title: '2nd random thing',
                body: "Loreafdadfam Ipsum is simplyadfafdaf dummy texadfadfafdafdat of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                date: new Date(),
                imageUrl: 'http://via.placeholder.com/960x258'
            }
        ]
    }

    return {
        type: SET_NEWSLETTERS,
        payload: response.data
    }
}