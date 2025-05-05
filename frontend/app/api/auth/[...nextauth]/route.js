// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const isProd = process.env.NODE_ENV === "production";

// Enforce secret in production
const secret = process.env.NEXTAUTH_SECRET;
if (isProd && !secret) {
  throw new Error("Missing NEXTAUTH_SECRET in production.");
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Mock Twitter",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "elonmusk" },
      },
      async authorize(credentials) {
        const user = {
          id: "12345",
          name: credentials?.username || "MockUser",
          email: `${credentials?.username}@twitter.dev`,
          image:
            "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",
        };
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/", // Login page remains at home
  },
  callbacks: {
    async redirect() {
      return "/dashboard";
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: secret || "dev-secret-key", // fallback secret for local
});

export { handler as GET, handler as POST };
