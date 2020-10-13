import { v4 as uuid } from 'uuid'

// 👉 the shape of the list of friends from API
const initialMembersList = [
  {
    id: uuid(), // uuid is a lib to generate random, unique ids
    name: 'Joe',
    email: 'joe@gmail.com',
    role: 'Backend Engineer',
  },
]

// 👉 simulating axios for [GET] and [POST]
export default {
  get() {
    return Promise.resolve({ status: 200, success: true, data: initialMembersList })
  },
  post(url, { name, email, role }) {
    const newMember = { id: uuid(), namename, email, role }
    return Promise.resolve({ status: 200, success: true, data: newMember })
  }
}
