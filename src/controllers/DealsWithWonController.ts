import { Request, Response} from "express";
import { api } from "../apiPipedrive";
import { CreateDealsWithWonRepository } from "../repositories/CreateDealsWithWonRepository";


class DealsWithWonController{
    async handle(request: Request,response : Response){
        try{
            const {data} = await api.get('?status=won&api_token={YourApiToken}"')
            const createDealsWithWonRepository = new CreateDealsWithWonRepository();
           
            var deals;
            Object.keys(data.data).forEach(key => {
                deals = createDealsWithWonRepository.execute({
                    name: data.data[key].name,
                    title:  data.data[key].title,    
                    person_name:    data.data[key].person_name,
                    org_name:   data.data[key].org_name,
                    value:   data.data[key].value,
                    add_time:  data.data[key].add_time,
                    active:  data.data[key].active,
                    status:   data.data[key].status,
                    cc_email: data.data[key].cc_email,
                });
            });
            return response.json("data saved successfully");
        }catch{
    
        }
    }
}

export {DealsWithWonController}