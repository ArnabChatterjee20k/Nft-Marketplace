import { createClient } from "@sanity/client";
export default createClient({
    projectId:"injx54dw",
    dataset:"production",
    useCdn:true,
    apiVersion:"2023-12-06",//todays date in YYYY-MM-DD
    token:"skC9nfDmSPVBWdZFrjqgrmAxtwZQGySIiMVdCdYBjIPfdVa3h0xluUzRgRQwQ3ambRsJK4dlbpxlkZUt5"
})