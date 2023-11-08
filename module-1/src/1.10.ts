{

    // type FrontendDeveloper = 'fakibazDeveloper' | "juniorDeveloper"
    // type FullStackDeveloper = 'frontendDeveloper' | "expertDeveloper"
    // const newDeveloper: FrontendDeveloper = "juniorDeveloper"

    // type Developer = FrontendDeveloper | FullStackDeveloper


    // type User = {
    //     name: string,
    //     email?: string,
    //     gender: "male" | "female";
    //     bloodGroup: "O+" | "A+" | "AB+"
    // }


    // const user1: User = {
    //     name: "Bulbul Ahmed",
    //     gender: "male",
    //     bloodGroup: "AB+"
    // }


    

    type FrontendDeveloper = {
        skills: string[],
        designation1: 'Frontend Developer'
    }
    type BackendDeveloper = {
        skills: string[],
        designation2: 'Backend Developer'
    }


    type FullStackDeveloper = FrontendDeveloper & BackendDeveloper


    const fullStackDeveloper: FullStackDeveloper = {
        skills: ["HTML", "CSS", "Express"],
        designation1: "Frontend Developer",
        designation2: "Backend Developer", 
    }


}