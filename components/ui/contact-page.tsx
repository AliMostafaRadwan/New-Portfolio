"use client";

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
	CalendarDays,
} from 'lucide-react';
import { Button, ButtonProps } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Script from 'next/script';

const APP_EMAIL = 'alimosamin@gmail.com';
const APP_PHONE = '+20 155 265 2525';

// Tell TypeScript about the global Calendly object
declare global {
	interface Window {
		Calendly?: {
			showPopupWidget: (url: string) => void;
			initBadgeWidget: (opts: object) => void;
			initInlineWidget: (opts: object) => void;
		};
	}
}

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

	function scrollToCalendly() {
		document.getElementById('calendly-widget')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

	return (
		<>
			{/* Calendly assets */}
			<link
				href="https://assets.calendly.com/assets/external/widget.css"
				rel="stylesheet"
			/>
			<Script
				src="https://assets.calendly.com/assets/external/widget.js"
				strategy="lazyOnload"
			/>

			<div className="w-full relative z-10 py-16">
				<div className="mx-auto h-full max-w-6xl lg:border-x border-white/5">
					{/* Header */}
					<div className="flex grow flex-col justify-center px-4 md:px-6 py-16 text-center">
						<span className="inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-zinc-500 mb-4">
							<CalendarDays className="h-3 w-3" />
							Let&apos;s Work Together
						</span>
						<h1 className="text-4xl font-extrabold md:text-6xl text-white tracking-tighter mb-4">
							Ready to Build?
						</h1>
						<p className="text-zinc-400 text-sm md:text-base max-w-md mx-auto mb-8">
							Looking to bring AI into your product? Let&apos;s talk about agents, pipelines, or anything in between.
						</p>

						{/* Primary CTA — scrolls to inline Calendly */}
						<motion.button
							onClick={scrollToCalendly}
							whileHover={{ scale: 1.04 }}
							whileTap={{ scale: 0.97 }}
							className="inline-flex items-center gap-2.5 mx-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white font-semibold text-sm shadow-[0_0_30px_rgba(139,92,246,0.35)] hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] transition-all duration-300 cursor-pointer"
						>
							<CalendarDays className="h-4 w-4" />
							Book a Free Call
						</motion.button>
					</div>

					<BorderSeparator />

					{/* Contact boxes */}
					<div className="grid md:grid-cols-2">
						<Box
							icon={Mail}
							title="Email"
							description="I respond within 24 hours."
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
							title="WhatsApp / Call"
							description="Available all week for calls or messages."
							className="border-b-0 md:border-r-0"
						>
							<div>
								<div className="flex items-center gap-x-2">
									<a
										href={`https://wa.me/${APP_PHONE.replace(/\s+/g, '')}`}
										target="_blank"
										rel="noopener noreferrer"
										className="block font-mono text-base font-medium tracking-wide hover:underline text-white"
									>
										{APP_PHONE}
									</a>
									<CopyButton className="size-6 text-white hover:bg-white/10 hover:text-white" test={APP_PHONE} />
								</div>
							</div>
						</Box>
					</div>

					<BorderSeparator />

					{/* Calendly inline widget — official div approach */}
					<div className="px-4 md:px-6 py-10">
						<p className="text-zinc-500 text-xs uppercase tracking-widest font-semibold text-center mb-6">
							Pick a time that works for you
						</p>
						<div
							id="calendly-widget"
							className="calendly-inline-widget"
							data-url="https://calendly.com/alimosamin/30min?background_color=09090b&text_color=f4f4f5&primary_color=7c3aed"
							style={{ minWidth: '320px', height: '700px' }}
						/>
					</div>

					<BorderSeparator />

					{/* Social Links */}
					<div className="relative flex h-full min-h-[200px] items-center justify-center py-12">
						<div className="relative z-10 space-y-6">
							<h2 className="text-center text-2xl font-bold text-white">Find me online</h2>
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
		</>
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
