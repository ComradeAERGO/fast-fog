import { Magic } from '@magic-sdk/admin';

// Initiating Magic instance for server-side methods
const magic = new Magic(process.env.MAGIC_SECRET_KEY);

export default async function login(req: any, res: any) {
  try {
    const didToken = req.headers.authorization.substr(7);
    await magic.token.validate(didToken);
    res.status(200).json({ authenticated: true });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}