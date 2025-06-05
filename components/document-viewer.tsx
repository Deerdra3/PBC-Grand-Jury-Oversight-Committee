"use client"

import { useState } from "react"
import { Download, ExternalLink, FileText, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface DocumentViewerProps {
  url: string
  title: string
  fallbackImageUrl?: string
}

export function DocumentViewer({ url, title, fallbackImageUrl }: DocumentViewerProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const isPdf = url.endsWith(".pdf")
  const fileName = url.split("/").pop() || "document"

  const handleIframeLoad = () => {
    setIsLoading(false)
  }

  const handleIframeError = () => {
    setHasError(true)
    setIsLoading(false)
  }

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  const handleImageError = () => {
    setHasError(true)
    setIsLoading(false)
  }

  return (
    <div className="space-y-4">
      <div className="rounded-md border overflow-hidden bg-gray-50">
        {isPdf && !hasError ? (
          <>
            {isLoading && (
              <div className="flex items-center justify-center h-[400px] bg-gray-50">
                <div className="flex flex-col items-center gap-2">
                  <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-[#1d3557]"></div>
                  <p className="text-sm text-gray-500">Loading document...</p>
                </div>
              </div>
            )}
            <iframe
              src={url}
              title={title}
              className={`w-full h-[400px] ${isLoading ? "hidden" : "block"}`}
              onLoad={handleIframeLoad}
              onError={handleIframeError}
            />
          </>
        ) : (
          <>
            {fallbackImageUrl ? (
              <div className="relative h-[400px] w-full">
                <img
                  src={fallbackImageUrl || "/placeholder.svg"}
                  alt={title}
                  className="w-full h-full object-contain"
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                />
              </div>
            ) : (
              <div className="flex items-center justify-center h-[400px] bg-gray-100">
                <div className="flex flex-col items-center gap-2 text-center p-4">
                  <AlertCircle className="h-12 w-12 text-amber-500" />
                  <h3 className="font-medium">Document preview unavailable</h3>
                  <p className="text-sm text-gray-500 max-w-md">
                    This document cannot be previewed directly. Please use the download button below to view the
                    document.
                  </p>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <a href={url} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
          <Button variant="outline" className="w-full flex items-center justify-center gap-2">
            <FileText className="h-4 w-4" />
            Open in New Tab
          </Button>
        </a>
        <a href={url} download={fileName} className="w-full sm:w-auto">
          <Button variant="outline" className="w-full flex items-center justify-center gap-2">
            <Download className="h-4 w-4" />
            Download Document
          </Button>
        </a>
        {fallbackImageUrl && isPdf && (
          <a
            href={fallbackImageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
            download={`${fileName.replace(".pdf", ".jpeg")}`}
          >
            <Button variant="outline" className="w-full flex items-center justify-center gap-2">
              <ExternalLink className="h-4 w-4" />
              View Image Version
            </Button>
          </a>
        )}
      </div>
    </div>
  )
}
