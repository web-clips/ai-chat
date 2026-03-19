export const sendMessage = async (message) => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/chat`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ message })
    });

    if (!res.ok) {
        throw new Error(`Ошибка запроса: ${res.status}`);
    }

    return res.json();
};