# === Full-Quality Instagram Reel Merger ===
# Requirements: pip install moviepy

from moviepy.editor import VideoFileClip, concatenate_videoclips, vfx

# Replace these with your actual video file paths
clip1_path = "WhatsApp Video 2025-10-17 at 15.43.16_111abb7d.mp4"
clip2_path = "WhatsApp Video 2025-10-17 at 15.43.24_a8b7be8f.mp4"
output_path = "final_instagram_reel.mp4"

def make_vertical(clip):
    """Convert to 9:16 vertical format by cropping and resizing."""
    h, w = clip.h, clip.w
    target_aspect = 9 / 16
    clip_aspect = w / h
    if clip_aspect > target_aspect:
        new_width = int(h * target_aspect)
        x1 = (w - new_width) // 2
        clip = clip.crop(x1=x1, width=new_width, height=h)
    else:
        new_height = int(w / target_aspect)
        y1 = (h - new_height) // 2
        clip = clip.crop(y1=y1, width=w, height=new_height)
    return clip.resize(height=1920)

# Load and process clips
clip1 = make_vertical(VideoFileClip(clip1_path))
clip2 = make_vertical(VideoFileClip(clip2_path))

# Enhance and add fades
clip1 = clip1.fadein(0.5).fx(vfx.colorx, 1.1)
clip2 = clip2.fadeout(0.5).fx(vfx.colorx, 1.1)

# Smooth crossfade transition
merged = concatenate_videoclips([clip1.crossfadeout(0.8), clip2.set_start(clip1.duration - 0.8)], method="compose")

# Global fade-in/out
final_clip = merged.fadein(0.5).fadeout(0.5)

# Export full-quality
final_clip.write_videofile(output_path, codec="libx264", audio_codec="aac", fps=30, bitrate="5000k")
print("✅ Done! Saved as:", output_path)
