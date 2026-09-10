import React, { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import { CustomButton } from '../components/CustomButton';
import { CustomInput } from '../components/CustomInput';
import { GroupCard } from '../components/GroupCard';
import { ScreenContainer } from '../components/ScreenContainer';
import { addPost, removePost } from '../store/slices/postsSlice';
import { useAppDispatch, useAppSelector } from '../store/store';

const groups = [
  { name: 'Desarrollo móvil', subject: 'React Native y TypeScript', members: 8 },
  { name: 'Bases de datos', subject: 'SQL y modelado', members: 5 },
];

export function GroupsScreen({ navigation }: any) {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const posts = useAppSelector((state) => state.posts.posts);
  const [selectedGroup, setSelectedGroup] = useState(groups[0].name);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handlePublish = () => {
    if (!title.trim() || !content.trim()) {
      Alert.alert('Publicación incompleta', 'Escribe un título y el contenido de tu publicación.');
      return;
    }

    dispatch(
      addPost({
        groupName: selectedGroup,
        title: title.trim(),
        content: content.trim(),
        author: user.name || user.email || 'Estudiante',
      }),
    );
    setTitle('');
    setContent('');
  };

  return (
    <ScreenContainer>
      <Text style={styles.title}>Mis grupos</Text>
      <Text style={styles.subtitle}>Comparte dudas, apuntes y avisos con tu comunidad.</Text>

      {groups.map((group) => (
        <GroupCard
          key={group.name}
          name={group.name}
          subject={group.subject}
          members={group.members}
          onOpen={() => navigation.navigate('GroupDetails', { groupName: group.name })}
        />
      ))}

      <Text style={styles.sectionTitle}>Nueva publicación</Text>
      <Text style={styles.label}>Publicar en</Text>
      <View style={styles.groupPicker}>
        {groups.map((group) => (
          <Pressable
            key={group.name}
            onPress={() => setSelectedGroup(group.name)}
            style={[styles.groupOption, selectedGroup === group.name && styles.groupOptionSelected]}
          >
            <Text style={[styles.groupOptionText, selectedGroup === group.name && styles.groupOptionTextSelected]}>{group.name}</Text>
          </Pressable>
        ))}
      </View>
      <CustomInput label="Título" placeholder="Ej. Duda sobre navegación" value={title} onChangeText={setTitle} />
      <CustomInput label="Contenido" placeholder="Escribe tu aporte o pregunta" multiline value={content} onChangeText={setContent} style={styles.contentInput} />
      <CustomButton title="Publicar en el grupo" onPress={handlePublish} />

      <Text style={styles.sectionTitle}>Publicaciones recientes</Text>
      {posts.length === 0 ? (
        <Text style={styles.empty}>Todavía no hay publicaciones. Sé el primero en compartir algo.</Text>
      ) : (
        posts.map((post) => (
          <View key={post.id} style={styles.postCard}>
            <Text style={styles.postGroup}>{post.groupName}</Text>
            <Text style={styles.postTitle}>{post.title}</Text>
            <Text style={styles.postContent}>{post.content}</Text>
            <Text style={styles.postAuthor}>Publicado por {post.author}</Text>
            <Pressable onPress={() => dispatch(removePost(post.id))}>
              <Text style={styles.deleteText}>Eliminar publicación</Text>
            </Pressable>
          </View>
        ))
      )}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  title: { color: '#173042', fontSize: 28, fontWeight: '800' },
  subtitle: { color: '#667781', fontSize: 16, marginBottom: 24, marginTop: 8 },
  sectionTitle: { color: '#173042', fontSize: 20, fontWeight: '800', marginBottom: 12, marginTop: 28 },
  label: { color: '#173042', fontSize: 14, fontWeight: '700', marginBottom: 8 },
  groupPicker: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 16 },
  groupOption: { backgroundColor: '#DDECEF', borderRadius: 8, paddingHorizontal: 12, paddingVertical: 10 },
  groupOptionSelected: { backgroundColor: '#1C6E8C' },
  groupOptionText: { color: '#15546B', fontSize: 13, fontWeight: '600' },
  groupOptionTextSelected: { color: '#FFFFFF' },
  contentInput: { minHeight: 90, textAlignVertical: 'top' },
  empty: { color: '#667781', fontSize: 15 },
  postCard: { backgroundColor: '#FFFFFF', borderRadius: 10, marginBottom: 10, padding: 14 },
  postGroup: { color: '#E07A5F', fontSize: 12, fontWeight: '800', textTransform: 'uppercase' },
  postTitle: { color: '#173042', fontSize: 17, fontWeight: '800', marginTop: 6 },
  postContent: { color: '#425466', fontSize: 15, lineHeight: 21, marginTop: 6 },
  postAuthor: { color: '#7B8A99', fontSize: 12, marginTop: 10 },
  deleteText: { color: '#B54747', fontSize: 12, fontWeight: '700', marginTop: 10 },
});
