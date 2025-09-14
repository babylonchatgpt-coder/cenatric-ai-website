-- Create table for demo requests
CREATE TABLE public.demo_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'completed'))
);

-- Enable Row Level Security
ALTER TABLE public.demo_requests ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert demo requests (public form)
CREATE POLICY "Anyone can submit demo requests" 
ON public.demo_requests 
FOR INSERT 
WITH CHECK (true);

-- Create policy for reading (only for authenticated users/admin)
CREATE POLICY "Only authenticated users can view demo requests" 
ON public.demo_requests 
FOR SELECT 
USING (auth.uid() IS NOT NULL);