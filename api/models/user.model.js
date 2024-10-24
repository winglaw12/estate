import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQApQMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAQIDBAUH/8QALRABAAICAAQEBQMFAAAAAAAAAAECAxESITFRBBNBcSIyUmGRgbHxFDNCYqL/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APuIAAAAAAAAAAAAAAAAAAAAAAAAAAACJmI6qWyelWczvqDWckK+Z2hQBfzJ7JjJ3hmA2i8Ss501tNQbitbcSwAAAAAAAAAADK998o6JyW9IZgAAAiZisfFMQCRXzKfXX8rAAAROujaluKOfViROp3AOgRE7jaQAAAAAAETOo2lTJPwgymdzsAAETOomewMs+bg5V+b9nJMzadzMzJa3FabT1lAC+PLbHPKeXZQVHoUvF6xavRZy+Etq817w6kUABfFPPTVzxOpiW8c4BIAAAAADPL6NGWXrAKAAK3+S3ssTzjXcHmx0E2rwWms+iFAARr4X+9HtLtcvhK7vNp9IdSKAANqT8MMW1PlgFgAAAAAGeWOUNFbxuoMQAAJ5RueUAxz4fM51+b93Jatqzq0TEuy2fHH+W/aET4jFPXc+8A42mPFa89NR3bedg+n/AJW/qcf+34BrWsUrEVjklSmWl51W0b+/JcAABvXpDKkbtDYAAAAAAAAGN41P2Vb2jihjManUgpkvFK8U/wAuHJktkndunbs18XeZyRX0rDAABUAAG+DPqeG/T0nswBXpDLBfjxxvrHJvSu53PRBfHXUb7rgAAAAAAAAArasTHNYB5XiaWplmbRqJnkyexetbxq0RMOTL4L1xW/SQcQ0vgy0+ak/ozUATETPSJn2gEDfH4TLfrHDH3deHwmPHzn4p+6DLwWO3BM3jUTPJ2RGkgAAAAAAAAAAAAAACJrE9YifeEgK+XX6a/hMREJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/9k="
    },
}, { timestamps: true })

const User = mongoose.model('User', userSchema)

export default User