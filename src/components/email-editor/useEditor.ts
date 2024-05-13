import { useRef, useState } from 'react'
import { TStyle, applyStyle } from './email-format'

export function useEditor() {
	const [selectionStart, setSelectionStart] = useState(0)
	const [selectionEnd, setSelectionEnd] = useState(0)
	const [text, setText] = useState('Enter email...')

	const textRef = useRef<HTMLTextAreaElement | null>(null)

	const updateSelection = () => {
		if (!textRef.current) return
		setSelectionStart(textRef.current.selectionStart)
		setSelectionEnd(textRef.current.selectionEnd)
	}

	const applyFormat = (type: TStyle) => {
		const selectedText = text.substring(selectionStart, selectionEnd)

		if (!selectedText) {
			return
		}

		const after = text.substring(selectionEnd)
		const before = text.substring(0, selectionStart)

		setText(before + applyStyle(type, selectedText) + after)
	}

	return { text, setText, textRef, applyFormat, updateSelection }
}
