import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Navbar } from "@/components/Navbar";

const Confirmation = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/20 to-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12 flex items-center justify-center min-h-[calc(100vh-200px)]">
        <Card className="max-w-md w-full shadow-[var(--shadow-card)] text-center">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <div className="rounded-full bg-accent/10 p-4">
                <CheckCircle className="h-16 w-16 text-accent" />
              </div>
            </div>
            <CardTitle className="text-3xl">Vote Confirmed!</CardTitle>
            <CardDescription className="text-base mt-2">
              Your vote has been securely recorded and encrypted
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-muted rounded-lg text-left">
              <h4 className="font-semibold mb-2">What happens next?</h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>✓ Your vote is encrypted and stored securely</li>
                <li>✓ Your identity remains completely anonymous</li>
                <li>✓ The vote cannot be altered or deleted</li>
                <li>✓ Results will be announced after voting closes</li>
              </ul>
            </div>
            
            <p className="text-sm text-muted-foreground">
              Thank you for participating in this democratic process. Your voice matters!
            </p>

            <div className="space-y-3">
              <Button 
                onClick={() => navigate("/candidates")} 
                className="w-full"
                variant="default"
              >
                View Candidates
              </Button>
              <Button 
                onClick={() => navigate("/")} 
                className="w-full"
                variant="outline"
              >
                Return Home
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Confirmation;
