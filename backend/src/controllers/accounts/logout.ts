import { 
    Request, 
    Response 
} from "express";


    const logout = async (req: Request, res: Response) => {
        return res
            .status(200)
            .clearCookie("authorizationToken")
            .send();
    }
export default logout;