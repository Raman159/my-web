import type { Config } from 'tailwindcss';
export default {
 content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
 theme: { extend: { colors: { paper:'#F3F0E9', ink:'#1B2421', muted:'#686D64', line:'#CBC9BF', acid:'#D4E65D', forest:'#35473E' }, fontFamily: { sans:['Arial','Helvetica','sans-serif'], serif:['Georgia','Times New Roman','serif'] }, maxWidth:{ editorial:'1440px' } } }, plugins: []
} satisfies Config;
