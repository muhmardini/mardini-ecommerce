type messages = {
    email: string,
    message: string
}
const receivedMessages:messages[] = [
    {
        email: "",
        message: ""
    },
]
export const addEmail = ({email, message}:messages) => {

    receivedMessages.push({"email":email,"message":message})
}
console.log(receivedMessages);

