import bcrypt from'bcryptjs'

const users=[
    {
        name:'Admin User',
        email:'admin@admin.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:true
    },
    {
        name:'Keng',
        email:'boonkeng025@gmail.com',
        password:bcrypt.hashSync('123456',10),

    },
    {
        name:'tester',
        email:'tester@gmail.com',
        password:bcrypt.hashSync('123456',10),

    },
    

]

export default users