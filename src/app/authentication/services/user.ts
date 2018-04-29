export class User{
    constructor(
        public employeeId: number,
        public employeeName: string,
        public employeeEmail: string,
        public password: string,
        public roles: string[]
    ){}
}