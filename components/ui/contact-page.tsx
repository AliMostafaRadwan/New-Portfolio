import React from 'react';
import { cn } from '@/lib/utils';
import {
	Check,
	Copy,
	LucideIcon,
	Mail,
	Phone,
	Github,
	Linkedin,
	Instagram,
} from 'lucide-react';
import { Button, ButtonProps } from '@/components/ui/button';

const APP_EMAIL = 'alimosamin@gmail.com';
const APP_PHONE = '+20 155 265 2525';
const APP_PHONE_2 = '+20 106 985 8532';

export function ContactPage() {
	const socialLinks = [
		{
			icon: Github,
			href: 'https://github.com/AliMostafaRadwan',
			label: 'GitHub',
		},
		{
			icon: Linkedin,
			href: 'https://www.linkedin.com/in/ali-m-radwan/',
			label: 'LinkedIn',
		},
		{
			icon: Instagram,
			href: 'https://www.instagram.com/ali.moustafa.radwan/',
			label: 'Instagram',
		},
	];

	return (
		<div className="w-full relative z-10 py-16">
			<div className="mx-auto h-full max-w-6xl lg:border-x border-white/5">
				<div className="flex grow flex-col justify-center px-4 md:px-6 py-16 text-center">
					<h1 className="text-4xl font-extrabold md:text-5xl text-white tracking-tighter mb-4">
						Get in Touch
					</h1>
					<p className="text-zinc-400 text-sm md:text-base max-w-md mx-auto">
						Looking to bring AI into your product? Let's talk about agents, pipelines, or anything in between.
					</p>
				</div>
				<BorderSeparator />
				<div className="grid md:grid-cols-2">
					<Box
						icon={Mail}
						title="Email"
						description="I respond to all emails within 24 hours."
					>
						<a
							href={`mailto:${APP_EMAIL}`}
							className="font-mono text-base font-medium tracking-wide hover:underline text-white"
						>
							{APP_EMAIL}
						</a>
						<CopyButton className="size-6 text-white hover:bg-white/10 hover:text-white" test={APP_EMAIL} />
					</Box>
					<Box
						icon={Phone}
						title="Phone"
						description="I'm available All week (whatsapp/call)."
						className="border-b-0 md:border-r-0"
					>
						<div>
							<div className="flex items-center gap-x-2">
								<a
									href={`tel:${APP_PHONE}`}
									className="block font-mono text-base font-medium tracking-wide hover:underline text-white"
								>
									{APP_PHONE}
								</a>
								<CopyButton className="size-6 text-white hover:bg-white/10 hover:text-white" test={APP_PHONE} />
							</div>
							<div className="flex items-center gap-x-2 mt-2">
								<a
									href={`tel:${APP_PHONE_2}`}
									className="block font-mono text-base font-medium tracking-wide hover:underline text-white"
								>
									{APP_PHONE_2}
								</a>
								<CopyButton className="size-6 text-white hover:bg-white/10 hover:text-white" test={APP_PHONE_2} />
							</div>
						</div>
					</Box>
				</div>
				<BorderSeparator />
				<div className="relative flex h-full min-h-[320px] items-center justify-center py-16">

					<div className="relative z-10 space-y-6">
						<h2 className="text-center text-3xl font-bold md:text-4xl text-white">
							Find me online
						</h2>
						<div className="flex flex-wrap items-center justify-center gap-4">
							{socialLinks.map((link) => (
								<a
									key={link.label}
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
									className="bg-zinc-900/50 hover:bg-white/10 text-zinc-300 hover:text-white flex items-center gap-x-2 rounded-full border border-white/10 px-6 py-2 transition-colors duration-200"
								>
									<link.icon className="size-4" />
									<span className="font-mono text-sm font-medium tracking-wide">
										{link.label}
									</span>
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function BorderSeparator() {
	return <div className="h-px w-full border-b border-white/5" />;
}

type ContactBox = React.ComponentProps<'div'> & {
	icon: LucideIcon;
	title: string;
	description: string;
};

function Box({
	title,
	description,
	className,
	children,
	...props
}: ContactBox) {
	return (
		<div
			className={cn(
				'flex flex-col justify-between border-b border-white/5 md:border-r md:border-b-0',
				className,
			)}
		>
			<div className="bg-white/5 flex items-center gap-x-3 border-b border-white/5 p-6">
				<props.icon className="text-zinc-400 size-5" strokeWidth={1} />
				<h2 className="font-heading text-lg font-medium tracking-wider text-white">
					{title}
				</h2>
			</div>
			<div className="flex items-center gap-x-2 p-6 py-12">{children}</div>
			<div className="border-t border-white/5 p-6">
				<p className="text-zinc-500 text-sm">{description}</p>
			</div>
		</div>
	);
}

type CopyButtonProps = ButtonProps & {
	test: string;
};

function CopyButton({
	className,
	variant = 'ghost',
	size = 'icon',
	test,
	...props
}: CopyButtonProps) {
	const [copied, setCopied] = React.useState<boolean>(false);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(test);
			setCopied(true);
			setTimeout(() => setCopied(false), 1500);
		} catch (err) {
			console.error('Failed to copy text: ', err);
		}
	};

	return (
		<Button
			variant={variant}
			size={size}
			className={cn('disabled:opacity-100 relative w-8 h-8 rounded-md', className)}
			onClick={handleCopy}
			aria-label={copied ? 'Copied' : 'Copy to clipboard'}
			disabled={copied || props.disabled}
			{...props}
		>
			<div
				className={cn(
					'transition-all absolute inset-0 flex items-center justify-center',
					copied ? 'scale-100 opacity-100' : 'scale-0 opacity-0',
				)}
			>
				<Check className="size-3.5 stroke-emerald-500" aria-hidden="true" />
			</div>
			<div
				className={cn(
					'transition-all absolute inset-0 flex items-center justify-center',
					copied ? 'scale-0 opacity-0' : 'scale-100 opacity-100',
				)}
			>
				<Copy aria-hidden="true" className="size-3.5" />
			</div>
		</Button>
	);
}
