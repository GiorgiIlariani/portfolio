import * as z from "zod";

export const Validation = z.object({
    from_name: z
        .string()
        .min(3, { message: "Minimum 3 characters." })
        .max(30, { message: "Maximum 30 caracters." }),
    from_email: z.string().email({ message: "Invalid email." }),
    message: z.string().min(10, { message: "Minimum 10 characters." }),
});