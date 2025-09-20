"use client"
import { signUpAction } from '@/app/(auth)/sign-up/action'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { useActionState, useCallback, useEffect, useRef, useState } from 'react'
import { Dropzone, DropzoneContent, DropzoneEmptyState } from './ui/kibo-ui/dropzone'

export default function SignUpComponent() {
  const [files, setFiles] = useState<File[] | undefined>();
  const [error, setError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrop = useCallback((files: File[]) => {
    setFiles(files);
    setError(''); // Clear any previous errors
  }, []);

  const handleError = useCallback((error: Error) => {
    setError(error.message)
    setFiles(undefined); // Clear files on error
  }, [])

  useEffect(() => {
    if (fileInputRef.current && files) {
      const dataTransfer = new DataTransfer();
      files.forEach(file => dataTransfer.items.add(file));
      fileInputRef.current.files = dataTransfer.files;
    } else if (fileInputRef.current && !files) {
      fileInputRef.current.value = '';
    }
  }, [files]);

  const [state, action, pending] = useActionState(signUpAction, '')
  return (
    <section className="flex justify-center items-center h-screen bg-transparent">
      <form
        action={action}
        className="bg-card/30 m-auto h-fit w-full max-w-sm rounded-[calc(var(--radius)+.125rem)] border p-0.5 shadow-md dark:[--color-muted:var(--color-zinc-900)]">
        <div className="p-8 pb-6">
          <div>
            <Link
              href="/"
              aria-label="go home">
              <Logo />
            </Link>
            <h1 className="mb-1 mt-4 text-xl font-semibold">Create a Sony Color Lab Account</h1>
            <p className="text-sm">Welcome! Create an account to get started</p>
          </div>
          <hr className="my-4 border-dashed" />

          <div className="space-y-5">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label
                  htmlFor="firstname"
                  className="block text-sm">
                  Firstname
                </Label>
                <Input
                  type="text"
                  required
                  name="firstname"
                  id="firstname"
                  disabled={pending}
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="lastname"
                  className="block text-sm">
                  Lastname
                </Label>
                <Input
                  type="text"
                  required
                  name="lastname"
                  id="lastname"
                  disabled={pending}
                />
              </div>
            </div>
            <div className='space-y-2'>
              <Label
                htmlFor="lastname"
                className="block text-sm">
                Avatar
              </Label>
              <Dropzone
                className='bg-transparent'
                accept={{ "image/*": [] }}
                maxFiles={1}
                maxSize={1024 * 1024 * 10}
                minSize={1024}
                onDrop={handleDrop}
                onError={handleError}
                src={files}
              >
                <DropzoneContent />
                <DropzoneEmptyState />
              </Dropzone>
              <Label className='text-destructive font-bold'>{error}</Label>
            </div>

            <input
              type="file"
              name="avatar"
              id="avatar"
              accept="image/*"
              style={{ display: 'none' }}
              ref={fileInputRef}
            />

            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="block text-sm">
                Username
              </Label>
              <Input
                type="email"
                required
                name="email"
                id="email"
                disabled={pending}
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="pwd"
                className="text-sm">
                Password
              </Label>
              <Input
                type="password"
                required
                name="pwd"
                id="pwd"
                className="input sz-md variant-mixed"
                disabled={pending}
              />
            </div>
            <Label className='my-4 text-destructive'>{state}</Label>
            <Button className="w-full" disabled={pending}>Continue</Button>
          </div>
        </div>
        <div className="bg-muted/60 rounded-(--radius) border p-3">
          <p className="text-accent-foreground text-center text-sm">
            Have an account ?
            <Button
              asChild
              variant="link"
              disabled={pending}
              className="px-2">
              <Link href="/login">Sign In</Link>
            </Button>
          </p>
        </div>
      </form>
    </section>
  )
}
