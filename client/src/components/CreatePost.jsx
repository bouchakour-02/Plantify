import React, { useState } from 'react';
import { Container, Typography, Button, TextField, Box, Tabs, Tab, IconButton } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import LinkIcon from '@mui/icons-material/Link';
import PollIcon from '@mui/icons-material/Poll';
import DraftsIcon from '@mui/icons-material/Drafts';
import RichTextEditor from 'react-rte'; // Use this or similar for rich text editor

const PostCreation = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState(RichTextEditor.createEmptyValue());
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleSubmit = () => {
    console.log("Post Created");
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, color: '#FFFFFF' }}>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>Create Post</Typography>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Button
          variant="outlined"
          color="inherit"
          startIcon={<DraftsIcon />}
          sx={{ textTransform: 'none', borderRadius: '10px' }}
        >
          Select a community
        </Button>
        <Typography sx={{ fontWeight: 'bold', color: '#b0b0b0' }}>Drafts</Typography>
      </Box>

      <Tabs value={selectedTab} onChange={handleTabChange} sx={{ mb: 2 }}>
        <Tab label="Text" />
        <Tab icon={<AddPhotoAlternateIcon />} label="Images & Video" />
        <Tab icon={<LinkIcon />} label="Link" />
        <Tab icon={<PollIcon />} label="Poll" />
      </Tabs>

      <TextField
        label="Title"
        fullWidth
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        sx={{ mb: 2, bgcolor: '#1a1a1a', borderRadius: '5px', input: { color: '#ffffff' } }}
        inputProps={{ maxLength: 300 }}
        helperText={`${title.length}/300`}
      />

      {selectedTab === 0 && (
        <Box sx={{ mb: 2 }}>
          <RichTextEditor
            value={body}
            onChange={setBody}
            toolbarConfig={{
              display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'LINK_BUTTONS'],
              INLINE_STYLE_BUTTONS: [
                { label: 'Bold', style: 'BOLD' },
                { label: 'Italic', style: 'ITALIC' },
                { label: 'Underline', style: 'UNDERLINE' }
              ],
              BLOCK_TYPE_BUTTONS: [
                { label: 'UL', style: 'unordered-list-item' },
                { label: 'OL', style: 'ordered-list-item' }
              ]
            }}
            editorStyle={{
              height: '150px',
              padding: '10px',
              backgroundColor: '#1a1a1a',
              color: '#ffffff',
              borderRadius: '5px'
            }}
          />
        </Box>
      )}

      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="outlined" color="inherit" sx={{ textTransform: 'none' }}>Save Draft</Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{ textTransform: 'none' }}
        >
          Post
        </Button>
      </Box>
    </Container>
  );
};

export default PostCreation;
